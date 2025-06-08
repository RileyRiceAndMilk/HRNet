import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import statesData from '../data/states.json';
import departmentsData from '../data/departments.json';
import EmployeeForm from '../components/EmployeeForm';
import "../css/style.css";

function CreateEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState(null); 
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState(null); 
  const [states, setStates] = useState([]);
  const [departments] = useState(departmentsData);
  const [isCreated, setIsCreated] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  useEffect(() => {
    const stateOptions = statesData.map(s => ({ value: s.abbreviation, label: s.name }));
    setStates(stateOptions);
  }, []);

  const getValue = (item) => {
    if (!item) return null;
    return typeof item === 'string' ? item : item.value;
  };

  const isFormValid = () => 
    firstName.trim() &&
    lastName.trim() &&
    dateOfBirth &&
    startDate &&
    street.trim() &&
    city.trim() &&
    getValue(state) &&
    zipCode.trim() &&
    getValue(department);

  const saveEmployee = () => {
    setHasAttemptedSubmit(true);

    if (!isFormValid()) {
      console.log("Formulaire invalide, sauvegarde annulée");
      console.log({
        firstName: !!firstName.trim(),
        lastName: !!lastName.trim(),
        dateOfBirth: !!dateOfBirth,
        startDate: !!startDate,
        street: !!street.trim(),
        city: !!city.trim(),
        state: !!getValue(state),
        zipCode: !!zipCode.trim(),
        department: !!getValue(department),
      });
      return;
    }

    const employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth.toISOString(),
      startDate: startDate.toISOString(),
      department: getValue(department),
      street,
      city,
      state: getValue(state),
      zipCode
    };

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

    console.log("Employé sauvegardé :", employee);

    setIsCreated(true);
    setTimeout(() => setIsCreated(false), 2000);
  };

  return (
    <div className="container">
      <Link to="/Employee">View Current Employees</Link>
      <h2>Create Employee</h2>

      <EmployeeForm
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        dateOfBirth={dateOfBirth}
        setDateOfBirth={setDateOfBirth}
        startDate={startDate}
        setStartDate={setStartDate}
        street={street}
        setStreet={setStreet}
        city={city}
        setCity={setCity}
        state={state}
        setState={(val) => {
          console.log("Selected state:", val);
          setState(val);
        }}
        zipCode={zipCode}
        setZipCode={setZipCode}
        department={department}
        setDepartment={(val) => {
          console.log("Selected department:", val);
          setDepartment(val);
        }}
        states={states}
        departments={departments}
        hasAttemptedSubmit={hasAttemptedSubmit}
      />

      <button onClick={saveEmployee}>Save</button>

      {isCreated && (
        <>
          <div className="modal-backdrop"></div>
          <div id="confirmation" className="modal">Employee Created!</div>
        </>
      )}
    </div>
  );
}

export default CreateEmployee;










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
  const [state, setState] = useState('');
  const [states, setStates] = useState([]);
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');
  const [departments] = useState(departmentsData);
  const [isCreated, setIsCreated] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  useEffect(() => {
    const fetchedStates = statesData.map((s) => s.name);
    setStates(fetchedStates);
  }, []);

  const isFormValid = () =>
    firstName.trim() &&
    lastName.trim() &&
    dateOfBirth &&
    startDate &&
    street.trim() &&
    city.trim() &&
    state &&
    zipCode.trim() &&
    department;

  const saveEmployee = () => {
    setHasAttemptedSubmit(true);

    if (!isFormValid()) return;

    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode
    };

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

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
        setState={setState}
        zipCode={zipCode}
        setZipCode={setZipCode}
        department={department}
        setDepartment={setDepartment}
        states={states}
        departments={departments}
        hasAttemptedSubmit={hasAttemptedSubmit} 
      />

      <button onClick={saveEmployee}>Save</button>

      {isCreated && <div id="confirmation" className="modal">Employee Created!</div>}
    </div>
  );
}

export default CreateEmployee;






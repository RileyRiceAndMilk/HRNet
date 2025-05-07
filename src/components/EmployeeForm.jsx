import React from 'react';
import DateOfBirthPicker from './DateOfBirthPicker'; 
import StartDatePicker from './StartDatePicker';    
import StateSelector from './StateSelector';       
import DepartmentSelector from './DepartmentSelector'; 

function EmployeeForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dateOfBirth,
  setDateOfBirth,
  startDate,
  setStartDate,
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
  department,
  setDepartment,
  states,
  departments
}) {
  const stateOptions = states.map((s) => ({ value: s, label: s }));
  const departmentOptions = departments.map((d) => ({ value: d, label: d }));

  return (
    <form id="create-employee">
      <label htmlFor="first-name">Prénom</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <label htmlFor="last-name">Nom</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <DateOfBirthPicker 
        dateOfBirth={dateOfBirth} 
        setDateOfBirth={setDateOfBirth} 
      />

      <StartDatePicker 
        startDate={startDate} 
        setStartDate={setStartDate} 
      />

      <fieldset className="address">
        <legend>Adresse</legend>

        <label htmlFor="street">Rue</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />

        <label htmlFor="city">Ville</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <StateSelector 
          state={state} 
          setState={setState} 
          stateOptions={stateOptions} 
        />

        <label htmlFor="zip-code">Code postal</label>
        <input
          type="number"
          id="zip-code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </fieldset>
      <DepartmentSelector 
        department={department} 
        setDepartment={setDepartment} 
        departmentOptions={departmentOptions} 
      />
    </form>
  );
}

export default EmployeeForm;





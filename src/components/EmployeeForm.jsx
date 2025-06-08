import React, { Suspense } from 'react';
import { SelectInput } from '@rileyriceandmilk/drop-down-menu-library';

const DateOfBirthPicker = React.lazy(() => import('./DateOfBirthPicker'));
const StartDatePicker = React.lazy(() => import('./StartDatePicker'));

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
  departments,  
  hasAttemptedSubmit
}) {
  const letterPattern = /^[A-Za-zÀ-ÿ\s]+$/;
  const departmentOptions = departments.map(d => ({ value: d, label: d }));

  return (
    <form id="create-employee">
    
      <label htmlFor="first-name">Prénom</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        required
        pattern={letterPattern.source}
      />
      {hasAttemptedSubmit && (!firstName || firstName.trim() === '') && (
        <p style={{ color: 'red' }}>Le prénom est requis.</p>
      )}
      {hasAttemptedSubmit && firstName && !letterPattern.test(firstName) && (
        <p style={{ color: 'red' }}>Le prénom ne peut contenir que des lettres.</p>
      )}

      <label htmlFor="last-name">Nom</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        required
        pattern={letterPattern.source}
      />
      {hasAttemptedSubmit && (!lastName || lastName.trim() === '') && (
        <p style={{ color: 'red' }}>Le nom est requis.</p>
      )}
      {hasAttemptedSubmit && lastName && !letterPattern.test(lastName) && (
        <p style={{ color: 'red' }}>Le nom ne peut contenir que des lettres.</p>
      )}

      <label htmlFor="street">Adresse</label>
      <input
        type="text"
        id="street"
        value={street}
        onChange={e => setStreet(e.target.value)}
        required
      />
      {hasAttemptedSubmit && (!street || street.trim() === '') && (
        <p style={{ color: 'red' }}>L'adresse est requise.</p>
      )}

      <label htmlFor="city">Ville</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={e => setCity(e.target.value)}
        required
        pattern={letterPattern.source}
      />
      {hasAttemptedSubmit && (!city || city.trim() === '') && (
        <p style={{ color: 'red' }}>La ville est requise.</p>
      )}
      {hasAttemptedSubmit && city && !letterPattern.test(city) && (
        <p style={{ color: 'red' }}>La ville ne peut contenir que des lettres.</p>
      )}

      <label htmlFor="zip-code">Code Postal</label>
      <input
        type="text"
        id="zip-code"
        value={zipCode}
        onChange={e => setZipCode(e.target.value)}
        required
        pattern="^\d{5}$"
      />
      {hasAttemptedSubmit && (!zipCode || zipCode.trim() === '') && (
        <p style={{ color: 'red' }}>Le code postal est requis.</p>
      )}
      {hasAttemptedSubmit && zipCode && !/^\d{5}$/.test(zipCode) && (
        <p style={{ color: 'red' }}>Le code postal doit contenir exactement 5 chiffres.</p>
      )}

      <label htmlFor="state"></label>
      <SelectInput
        label="state"
        options={states}
        value={state}
        setValue={setState}
        placeholder="Sélectionnez un état"
      />
      {hasAttemptedSubmit && !state && (
        <p style={{ color: 'red' }}>L'état est requis.</p>
      )}

      <label htmlFor="department"></label>
      <SelectInput
        label="department"
        options={departmentOptions}
        value={department}
        setValue={setDepartment}
        placeholder="Sélectionnez un département"
      />
      {hasAttemptedSubmit && !department && (
        <p style={{ color: 'red' }}>Le département est requis.</p>
      )}

      <Suspense fallback={<p>Chargement du sélecteur de date de naissance…</p>}>
        <DateOfBirthPicker
          dateOfBirth={dateOfBirth}
          setDateOfBirth={setDateOfBirth}
          hasAttemptedSubmit={hasAttemptedSubmit}
        />
      </Suspense>

      <Suspense fallback={<p>Chargement du sélecteur de date d'embauche…</p>}>
        <StartDatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          hasAttemptedSubmit={hasAttemptedSubmit}
        />
      </Suspense>
    </form>
  );
}

export default EmployeeForm;


















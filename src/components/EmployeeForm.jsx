import React, { Suspense } from 'react';

const DateOfBirthPicker = React.lazy(() => import('./DateOfBirthPicker'));
const StartDatePicker = React.lazy(() => import('./StartDatePicker'));
const StateSelector = React.lazy(() => import('./StateSelector'));
const DepartmentSelector = React.lazy(() => import('./DepartmentSelector'));

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
  const stateOptions = states.map((s) => ({ value: s, label: s }));
  const departmentOptions = departments.map((d) => ({ value: d, label: d }));
  const letterPattern = /^[A-Za-zÀ-ÿ\s]+$/;

  return (
    <form id="create-employee">
      <label htmlFor="first-name">Prénom</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
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
        onChange={(e) => setLastName(e.target.value)}
        required
        pattern={letterPattern.source}
      />
      {hasAttemptedSubmit && (!lastName || lastName.trim() === '') && (
        <p style={{ color: 'red' }}>Le nom est requis.</p>
      )}
      {hasAttemptedSubmit && lastName && !letterPattern.test(lastName) && (
        <p style={{ color: 'red' }}>Le nom ne peut contenir que des lettres.</p>
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

        <Suspense fallback={<p>Chargement des états…</p>}>
          <StateSelector
            state={state}
            setState={setState}
            stateOptions={stateOptions}
            hasAttemptedSubmit={hasAttemptedSubmit}
          />
        </Suspense>

        <label htmlFor="zip-code">Code postal</label>
        <input
          type="number"
          id="zip-code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </fieldset>

      <Suspense fallback={<p>Chargement des départements…</p>}>
        <DepartmentSelector
          department={department}
          setDepartment={setDepartment}
          departmentOptions={departmentOptions}
          hasAttemptedSubmit={hasAttemptedSubmit}
        />
      </Suspense>
    </form>
  );
}

export default EmployeeForm;










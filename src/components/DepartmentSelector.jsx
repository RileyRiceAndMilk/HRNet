import React, { Suspense } from 'react';

const Select = React.lazy(() => import('react-select'));

function DepartmentSelector({ department, setDepartment, departmentOptions, hasAttemptedSubmit }) {
  const showError = hasAttemptedSubmit && department === '';

  return (
    <div>
      <label htmlFor="department">Département</label>
      <Suspense fallback={<p>Chargement du sélecteur…</p>}>
        <Select
          inputId="department"
          options={departmentOptions}
          value={departmentOptions.find((option) => option.value === department)}
          onChange={(selectedOption) => setDepartment(selectedOption.value)}
          placeholder="Sélectionnez un département"
          required
        />
      </Suspense>
      {showError && (
        <p style={{ color: 'red' }}>Le département est requis.</p>
      )}
    </div>
  );
}

export default DepartmentSelector;



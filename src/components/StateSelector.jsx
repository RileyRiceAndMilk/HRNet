import React, { Suspense } from 'react';

const Select = React.lazy(() => import('react-select'));

function StateSelector({ state, setState, stateOptions, hasAttemptedSubmit }) {
  const showError = hasAttemptedSubmit && state === '';

  return (
    <div>
      <label htmlFor="state">État</label>
      <Suspense fallback={<p>Chargement des options...</p>}>
        <Select
          inputId="state"
          options={stateOptions}
          value={stateOptions.find((option) => option.value === state)}
          onChange={(selectedOption) => setState(selectedOption.value)}
          placeholder="Sélectionnez un état"
          required
        />
      </Suspense>
      {showError && (
        <p style={{ color: 'red' }}>L’état est requis.</p>
      )}
    </div>
  );
}

export default StateSelector;




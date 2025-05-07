import React from 'react';
import Select from 'react-select';

function StateSelector({ state, setState, stateOptions }) {
  return (
    <div>
      <label htmlFor="state">État</label>
      <Select
        inputId="state"
        options={stateOptions}
        value={stateOptions.find((option) => option.value === state)}
        onChange={(selectedOption) => setState(selectedOption.value)}
        placeholder="Sélectionnez un état"
        required
      />
    </div>
  );
}

export default StateSelector;

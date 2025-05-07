import React from 'react';
import Select from 'react-select';

function DepartmentSelector({ department, setDepartment, departmentOptions }) {
  return (
    <div>
      <label htmlFor="department">Département</label>
      <Select
        inputId="department"
        options={departmentOptions}
        value={departmentOptions.find((option) => option.value === department)}
        onChange={(selectedOption) => setDepartment(selectedOption.value)}
        placeholder="Sélectionnez un département"
        required
      />
    </div>
  );
}

export default DepartmentSelector;

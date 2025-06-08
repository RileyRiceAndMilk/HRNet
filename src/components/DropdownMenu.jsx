import React from 'react';

export default function DropdownMenu({ options, selected, onChange }) {
  return (
    <select
      value={selected?.value || ''}
      onChange={(e) => {
        const selectedOption = options.find(option => option.value === e.target.value);
        if (selectedOption) onChange(selectedOption);
      }}
    >
      <option value="" disabled>-- Choisir une option --</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

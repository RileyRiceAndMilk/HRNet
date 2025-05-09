import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DepartmentSelector from '../components/DepartmentSelector';

test('affiche une erreur lorsque le département est vide et que le formulaire est soumis', () => {
  const mockSetDepartment = jest.fn();

  render(
    <DepartmentSelector
      department="" 
      setDepartment={mockSetDepartment}
      departmentOptions={[{ value: 'RH', label: 'Ressources Humaines' }]}
      hasAttemptedSubmit={true} 
    />
  );

  expect(screen.getByText(/le département est requis/i)).toBeInTheDocument();
});

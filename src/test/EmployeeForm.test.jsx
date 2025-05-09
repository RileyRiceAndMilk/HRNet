import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmployeeForm from '../components/EmployeeForm';

const defaultProps = {
  setFirstName: jest.fn(),
  setLastName: jest.fn(),
  setDateOfBirth: jest.fn(),
  setStartDate: jest.fn(),
  setStreet: jest.fn(),
  setCity: jest.fn(),
  setState: jest.fn(),
  setZipCode: jest.fn(),
  setDepartment: jest.fn(),
  dateOfBirth: new Date(),
  startDate: new Date(),
  street: '10 rue de Paris',
  city: 'Paris',
  state: 'Île-de-France',
  zipCode: '75000',
  department: 'RH',
  states: ['Île-de-France'],
  departments: ['RH'],
  hasAttemptedSubmit: true,
};

describe('EmployeeForm validation', () => {
  test('affiche une erreur si le prénom est manquant', () => {
    render(<EmployeeForm {...defaultProps} firstName="" lastName="Durand" />);
    expect(screen.getByText(/le prénom est requis/i)).toBeInTheDocument();
  });

  test('affiche une erreur si le nom est manquant', () => {
    render(<EmployeeForm {...defaultProps} firstName="Jean" lastName="" />);
    expect(screen.getByText(/le nom est requis/i)).toBeInTheDocument();
  });

  test('affiche une erreur si le prénom contient des caractères non valides', () => {
    render(<EmployeeForm {...defaultProps} firstName="Jean123" lastName="Durand" />);
    expect(screen.getByText(/le prénom ne peut contenir que des lettres/i)).toBeInTheDocument();
  });

  test('affiche une erreur si le nom contient des caractères non valides', () => {
    render(<EmployeeForm {...defaultProps} firstName="Jean" lastName="Dur@nd" />);
    expect(screen.getByText(/le nom ne peut contenir que des lettres/i)).toBeInTheDocument();
  });
});




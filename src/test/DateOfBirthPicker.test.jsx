import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateOfBirthPicker from '../components/DateOfBirthPicker';

test('affiche une erreur lorsque la date de naissance est vide et que le formulaire est soumis', () => {
  const mockSetDateOfBirth = jest.fn();

  render(
    <DateOfBirthPicker
      dateOfBirth={null}
      setDateOfBirth={mockSetDateOfBirth}
      hasAttemptedSubmit={true}
    />
  );

  expect(screen.getByText(/La date de naissance est requise/i)).toBeInTheDocument();
});

test('affiche le champ de date avec le placeholder initial', () => {
  const mockSetDateOfBirth = jest.fn();

  render(
    <DateOfBirthPicker
      dateOfBirth={null}
      setDateOfBirth={mockSetDateOfBirth}
      hasAttemptedSubmit={false}
    />
  );

  expect(screen.getByPlaceholderText(/Sélectionnez une date/i)).toBeInTheDocument();
});

test('ne montre pas d\'erreur lorsque la date de naissance est sélectionnée et que hasAttemptedSubmit est true', () => {
  const mockSetDateOfBirth = jest.fn();
  const selectedDate = new Date('2025-05-08');

  render(
    <DateOfBirthPicker
      dateOfBirth={selectedDate}
      setDateOfBirth={mockSetDateOfBirth}
      hasAttemptedSubmit={true}
    />
  );

  expect(screen.queryByText(/La date de naissance est requise/i)).toBeNull();
});

test('appelle setDateOfBirth lorsque l\'utilisateur sélectionne une date', () => {
  const mockSetDateOfBirth = jest.fn();

  render(
    <DateOfBirthPicker
      dateOfBirth={null}
      setDateOfBirth={mockSetDateOfBirth}
      hasAttemptedSubmit={false}
    />
  );

  const dateInput = screen.getByPlaceholderText(/Sélectionnez une date/i);

  fireEvent.change(dateInput, { target: { value: '08/05/2025' } });

  expect(mockSetDateOfBirth).toHaveBeenCalledTimes(1);
  expect(mockSetDateOfBirth).toHaveBeenCalledWith(expect.any(Date));  
});





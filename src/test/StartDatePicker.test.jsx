import React from 'react';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import StartDatePicker from '../components/StartDatePicker';

test('affiche une erreur lorsque la date d\'embauche est vide et que le formulaire est soumis', () => {
  const mockSetStartDate = jest.fn();

  render(
    <StartDatePicker
      startDate={null} 
      setStartDate={mockSetStartDate}
      hasAttemptedSubmit={true} 
    />
  );

  expect(screen.getByText(/la date d'embauche est requise/i)).toBeInTheDocument();
});

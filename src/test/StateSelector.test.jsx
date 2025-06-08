import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StateSelector from '../components/StateSelector';

test('affiche une erreur lorsque l\'état est vide et que le formulaire est soumis', () => {
  const mockSetState = jest.fn();
  const stateOptions = [
    { value: 'Île-de-France', label: 'Île-de-France' },
    { value: 'Provence-Alpes-Côte d\'Azur', label: 'Provence-Alpes-Côte d\'Azur' }
  ];

  render(
    <StateSelector
      state="" 
      setState={mockSetState}
      stateOptions={stateOptions}
      hasAttemptedSubmit={true} 
    />
  );

  expect(screen.getByText(/l’état est requis/i)).toBeInTheDocument();
});

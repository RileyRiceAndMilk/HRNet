import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/HomePage';
import { MemoryRouter } from 'react-router-dom';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.useFakeTimers();
jest.setTimeout(10000); 

test('affiche la modale "Employee Created!" après soumission valide du formulaire', async () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/prénom/i), { target: { value: 'Jean' } });
  fireEvent.change(screen.getByLabelText(/^nom$/i), { target: { value: 'Dupont' } });
  fireEvent.change(screen.getByLabelText(/rue/i), { target: { value: '123 rue de Paris' } });
  fireEvent.change(screen.getByLabelText(/ville/i), { target: { value: 'Paris' } });
  fireEvent.change(screen.getByLabelText(/code postal/i), { target: { value: '75000' } });

  const dateInputs = screen.getAllByPlaceholderText(/sélectionnez une date/i);
  fireEvent.change(dateInputs[0], { target: { value: '01/01/1990' } });
  fireEvent.change(dateInputs[1], { target: { value: '01/01/2020' } });

  const stateDropdown = screen.getByLabelText(/état/i);
  fireEvent.keyDown(stateDropdown, { key: 'ArrowDown' });
  await waitFor(() => screen.getByText('California'));
  fireEvent.click(screen.getByText('California'));

  const departmentDropdown = screen.getByLabelText(/département/i);
  fireEvent.keyDown(departmentDropdown, { key: 'ArrowDown' });
  await waitFor(() => screen.getByText('Sales'));
  fireEvent.click(screen.getByText('Sales'));

  fireEvent.click(screen.getByText(/save/i));

  await waitFor(() =>
    expect(screen.getByText(/employee created/i)).toBeInTheDocument()
  );


  act(() => {
    jest.advanceTimersByTime(2000);
  });

  
  await waitFor(() =>
    expect(screen.queryByText(/employee created/i)).not.toBeInTheDocument()
  );
});








import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; 

test('affiche la page d\'accueil sur la route "/"', () => {
  render(<App />); 

  
  const homePageTitle = screen.getByText(/Create Employee/i);

 
  expect(homePageTitle).toBeInTheDocument();
});

test('affiche la page des employés sur la route "/Employee"', () => {
  render(<App />); 

  const employeePageTitle = screen.getByText(/View Current Employees/i);

  expect(employeePageTitle).toBeInTheDocument();
});









import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Employee from '../pages/Employee'; 
import { MemoryRouter } from 'react-router-dom';

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR');
};

describe('Employee component', () => {

  test('le titre "Employés actuels" est bien affiché', () => {
    render(
      <MemoryRouter>
        <Employee />
      </MemoryRouter>
    );

    expect(screen.getByText(/Employés actuels/i)).toBeInTheDocument();
  });

  test('le lien "Accueil" fonctionne et redirige vers la page d\'accueil', () => {
    render(
      <MemoryRouter initialEntries={['/employee']}>
        <Employee />
      </MemoryRouter>
    );

  
    const linkElement = screen.getByText(/Accueil/i);
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(linkElement);

    expect(window.location.pathname).toBe('/');
  });

  test('affiche "Aucun employé enregistré" lorsqu\'il n\'y a pas d\'employés', () => {
    localStorage.setItem('employees', JSON.stringify([]));

    render(
      <MemoryRouter>
        <Employee />
      </MemoryRouter>
    );

    expect(screen.getByText(/Aucun employé enregistré/i)).toBeInTheDocument();
  });

  test('affiche les dates formatées correctement dans le tableau', () => {
    const employees = [
      {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1980-05-01',
        startDate: '2010-06-15',
        department: 'HR',
        street: '123 Street',
        city: 'Paris',
        state: 'Ile-de-France',
        zipCode: '75000',
      },
    ];

    localStorage.setItem('employees', JSON.stringify(employees));

    render(
      <MemoryRouter>
        <Employee />
      </MemoryRouter>
    );

    expect(screen.getByText('01/05/1980')).toBeInTheDocument();
    expect(screen.getByText('15/06/2010')).toBeInTheDocument();
  });

});






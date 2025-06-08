import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  };

  return (
    <div id="employee-div" className="container">
      <h1>Employés actuels</h1>

      <table id="employee-table" className="display">
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Date de naissance</th>
            <th>Date d'embauche</th>
            <th>Département</th>
            <th>Rue</th>
            <th>Ville</th>
            <th>État</th>
            <th>Code postal</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{formatDate(employee.dateOfBirth)}</td>
                <td>{formatDate(employee.startDate)}</td>
                <td>{employee.department}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Aucun employé enregistré</td>
            </tr>
          )}
        </tbody>
      </table>

      <Link to="/">Accueil</Link>
    </div>
  );
}

export default EmployeeList;


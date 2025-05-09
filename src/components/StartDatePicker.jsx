import React, { Suspense } from 'react';

const DatePicker = React.lazy(() => import('react-datepicker'));

function StartDatePicker({ startDate, setStartDate, hasAttemptedSubmit }) {
  const showError = hasAttemptedSubmit && startDate === null;

  return (
    <div>
      <label htmlFor="start-date">Date d'embauche</label>
      <Suspense fallback={<p>Chargement du sélecteur de date...</p>}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          id="start-date"
          placeholderText="Sélectionnez une date"
          className="datepicker-input"
          calendarClassName="my-custom-datepicker"
          required
        />
      </Suspense>
      {startDate && (
        <p>Date d'embauche : {startDate.toLocaleDateString('fr-FR')}</p>
      )}
      {showError && (
        <p style={{ color: 'red' }}>La date d'embauche est requise.</p>
      )}
    </div>
  );
}

export default StartDatePicker;



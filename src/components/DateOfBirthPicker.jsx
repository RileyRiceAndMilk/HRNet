import React, { Suspense } from 'react';

const DatePicker = React.lazy(() => import('react-datepicker'));

function DateOfBirthPicker({ dateOfBirth, setDateOfBirth, hasAttemptedSubmit }) {
  const showError = hasAttemptedSubmit && dateOfBirth === null;

  return (
    <div>
      <label htmlFor="date-of-birth">Date de naissance</label>
      <Suspense fallback={<p>Chargement du calendrier…</p>}>
        <DatePicker
          selected={dateOfBirth}
          onChange={(date) => setDateOfBirth(date)}
          dateFormat="dd/MM/yyyy"
          id="date-of-birth"
          placeholderText="Sélectionnez une date"
          className="datepicker-input"
          calendarClassName="my-custom-datepicker"
          required
        />
      </Suspense>
      {dateOfBirth && (
        <p>Date de naissance : {dateOfBirth.toLocaleDateString('fr-FR')}</p>
      )}
      {showError && (
        <p style={{ color: 'red' }}>La date de naissance est requise.</p>
      )}
    </div>
  );
}

export default DateOfBirthPicker;




import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function StartDatePickerLazyWrapper({ startDate, setStartDate, hasAttemptedSubmit }) {
  const showError = hasAttemptedSubmit && !startDate;

  return (
    <div>
      <label htmlFor="start-date">Date d'embauche</label>
      <Flatpickr
        id="start-date"
        value={startDate || ''}  
        onChange={([date]) => setStartDate(date)}
        options={{
          dateFormat: 'd/m/Y',
          maxDate: 'today',
        }}
        placeholder="Sélectionnez une date"
        className="datepicker-input"
        required
      />
      {startDate && (
        <p>Date d'embauche : {startDate.toLocaleDateString('fr-FR')}</p>
      )}
      {showError && (
        <p style={{ color: 'red' }}>La date d'embauche est requise.</p>
      )}
    </div>
  );
}

export default StartDatePickerLazyWrapper;





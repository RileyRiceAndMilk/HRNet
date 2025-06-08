import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function DateOfBirthPickerLazyWrapper({ dateOfBirth, setDateOfBirth, hasAttemptedSubmit }) {
  const showError = hasAttemptedSubmit && !dateOfBirth;

  return (
    <div>
      <label htmlFor="date-of-birth">Date de naissance</label>
      <Flatpickr
        id="date-of-birth"
        value={dateOfBirth || ''} 
        onChange={([date]) => setDateOfBirth(date)}
        options={{
          dateFormat: 'd/m/Y',
          maxDate: 'today',
        }}
        placeholder="Sélectionnez une date"
        className="datepicker-input"
        required
      />
      {dateOfBirth && (
        <p>Date de naissance : {dateOfBirth.toLocaleDateString('fr-FR')}</p>
      )}
      {showError && (
        <p style={{ color: 'red' }}>La date de naissance est requise.</p>
      )}
    </div>
  );
}

export default DateOfBirthPickerLazyWrapper;






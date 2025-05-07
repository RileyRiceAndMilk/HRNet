
import React from 'react';
import DatePicker from 'react-datepicker';

function DateOfBirthPicker({ dateOfBirth, setDateOfBirth }) {
  return (
    <div>
      <label htmlFor="date-of-birth">Date de naissance</label>
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
      {dateOfBirth && (
        <p>Date de naissance : {dateOfBirth.toLocaleDateString('fr-FR')}</p>
      )}
    </div>
  );
}

export default DateOfBirthPicker;

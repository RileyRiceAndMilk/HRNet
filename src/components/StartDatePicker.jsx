import React from 'react';
import DatePicker from 'react-datepicker';

function StartDatePicker({ startDate, setStartDate }) {
  return (
    <div>
      <label htmlFor="start-date">Date d'embauche</label>
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
      {startDate && (
        <p>Date d'embauche : {startDate.toLocaleDateString('fr-FR')}</p>
      )}
    </div>
  );
}

export default StartDatePicker;

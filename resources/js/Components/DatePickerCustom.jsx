import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

registerLocale('es', es);

function DatePickerCustom({ className, name, value }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    setDefaultLocale('es');

  return (
    <>
        <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              handleDateChange(date);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            showMonthDropdown
            showYearDropdown
            dropdownMode='select'
            className={className}
            name={name}
            value={value}
        />
        <input className='text-black hidden' type="text" name={name} value={selectedDate ? selectedDate.toLocaleDateString() : ''} />
    </>
  )
}

export default DatePickerCustom
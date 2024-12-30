import React, { useState } from 'react';
import "../Style/Calendar.css";

interface CalendarProps {
  onChange: (date: string) => void;
  value: string;
  placeholder: string;
}

const Calendar: React.FC<CalendarProps> = ({ onChange, value, placeholder }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(months.indexOf(e.target.value));
  };

  const handleDateClick = (day: number) => {
    const dateString = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    onChange(dateString);
    setShowDropdown(false);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);
    const firstDay = getFirstDayOfMonth(selectedYear, selectedMonth);
    const dates = [];

    for (let i = 0; i < firstDay; i++) {
      dates.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentDate = i === currentDate.getDate() && selectedMonth === currentMonth && selectedYear === currentYear;
      const isSelectedDate = value === `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      dates.push(
        <div
          key={i}
          className={`calendar-cell ${isCurrentDate ? 'current' : ''} ${isSelectedDate ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    return dates;
  };

  return (
    <div className="calendar-container">
      <input
        type="text"
        value={value || ''}
        placeholder={placeholder}
        onClick={() => setShowDropdown(!showDropdown)}
        readOnly
        className="calendar-input"
      />
      {showDropdown && (
        <div className="calendar-dropdown">
          <div className="calendar-header">
            <select value={selectedYear} onChange={handleYearChange} className="calendar-select">
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select value={months[selectedMonth]} onChange={handleMonthChange} className="calendar-select">
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="calendar-grid">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
              <div key={day} className="calendar-cell header">{day}</div>
            ))}
            {renderCalendar()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

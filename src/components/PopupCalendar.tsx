import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type PopupCalendarProps = {
  onClose: () => void;
};

const armenianWeekdaysShort = ['երկ', 'երք', 'չոր', 'հնգ', 'ուրբ', 'շաբ', 'կիր'];
const armenianMonths = [
  'ՀՈՒՆՎԱՐ',
  'ՓԵՏՐՎԱՐ',
  'ՄԱՐՏ',
  'ԱՊՐԻԼ',
  'ՄԱՅԻՍ',
  'ՀՈՒՆԻՍ',
  'ՀՈՒԼԻՍ',
  'ՕԳՈՍՏՈՍ',
  'ՍԵՊՏԵՄԲԵՐ',
  'ՀՈԿՏԵՄԲԵՐ',
  'ՆՈՅԵՄԲԵՐ',
  'ԴԵԿՏԵՄԲԵՐ',
];

const PopupCalendar: React.FC<PopupCalendarProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const currentMonthName = selectedDate ? armenianMonths[selectedDate.getMonth()] : '';

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>
        <p className="subtitle">Նշեք Ձեր ցանկալի օրերը</p>
        <div className="mouthtitlebackgound">
          <h1 className="month-title">{currentMonthName}</h1>
        </div>

        <div className="weekdays">
          {armenianWeekdaysShort.map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </div>
        <div className="datepicker-wrapper">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            renderCustomHeader={() => null}
            formatWeekDay={(nameOfDay) => {
              const dayIndex = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].indexOf(nameOfDay);
              return armenianWeekdaysShort[dayIndex] || '';
            }}
          />
        </div>
        <style jsx>{`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .popup-content {
            background-color: #fff;
            padding: 30px 40px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            position: relative;
            max-width: 500px;
            width: 90%;
            text-align: center;
            font-family: sans-serif;
              background-color:FF6B00;
          }

          .close-button {
            position: absolute;
            top: 12px;
            right: 15px;
            font-size: 18px;
            background: transparent;
            border: none;
            cursor: pointer;
            color: #000;
            transition: color 0.2s ease;
          }

          .close-button:hover {
            color: #FF6B00;
          }
                    .mouthtitlebackgound{
                    width:auto;
                    height:50px;
                        backgorund-color:#FF6B00;
                    }
          .subtitle {
            margin: 0;
            font-size: 16px;
            color: #000;
            
          }

          .month-title {
            font-size: 25ыpx;
            color: #FF6B00;
                  
            margin: 10px 0 5px;
            font-weight: bold;
          }

          .weekdays {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 14px;
            color: #FF6B00;
            margin-bottom: 10px;
            padding: 0 10px;
          }

          .datepicker-wrapper :global(.react-datepicker) {
            border: none;
            font-family: inherit;
        
          }

          .datepicker-wrapper :global(.react-datepicker__header) {
            background-color: #fff;
            border-bottom: none;
            
            padding: 0;
          }

          .datepicker-wrapper :global(.react-datepicker__current-month),
          .datepicker-wrapper :global(.react-datepicker__day-name) {
            display: none;
          }

          .datepicker-wrapper :global(.react-datepicker__month) {
            margin: 0;
          }

          .datepicker-wrapper :global(.react-datepicker__day) {
            width: 2.2rem;
            height: 2.2rem;
            margin: 0.2rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            border-radius: 50%;
            color: #000;
            transition: background-color 0.2s ease;
          }

          .datepicker-wrapper :global(.react-datepicker__day--selected),
          .datepicker-wrapper :global(.react-datepicker__day--keyboard-selected) {
            background-color: #FF6B00;
            color: #fff;
          }

          .datepicker-wrapper :global(.react-datepicker__day:hover) {
            background-color: rgba(255, 107, 0, 0.2);
          }

          .datepicker-wrapper :global(.react-datepicker__day--outside-month) {
            color: #ccc;
          }
            .datepicker-wrapper :global(.react-datepicker__day--today) {
  background-color: #FF6B00;
  color: #fff;
  border-radius: 50%;
}
.react-datepicker__day--selected.react-datepicker__day--today {
  background-color: #FF6B00 !important;
  color: #fff !important;
                    border-radius:50%;
}

        `}</style>
      </div>
    </div>
  );
};

export default PopupCalendar;

import React from 'react';
import { Calendar } from '../components/Calendar';

import './CalendarView.css';
function CalendarView() {
  let now = new Date();

  return (
    <>
    <Calendar year={now.getFullYear()} month={now.getMonth()+1} day={now.getDate()} />
    </>
  );
}

export default CalendarView;
import React, {useState}from 'react';
import ReactDOM from 'react-dom';
import "./css/Calendar.css"
import "react-modern-calendar-datepicker/lib/DatePicker.css";

import { Calendar } from "react-modern-calendar-datepicker";
import { get } from '../QUERIES/debug';



const MyCalendar = (props) => {
  let date = new Date()
  const defaultValue = {
    year: Number(date.getFullYear()),
    month: Number(date.getMonth())+1,
    day: Number(date.getDate()),
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);

  function OnChange(event){

    let el = document.createElement('div');

    const appRoot = document.getElementById('app-root');
    const modalRoot = document.getElementById('modal-root');

    setSelectedDay(event)
    console.log(event)

    

    let domNode = <div className="modal"><h1></h1></div>
    appRoot.appendChild(domNode)

    return( 
      ReactDOM.createPortal(
        domNode,
        el,
      )
    );
    //тут  креитится портал
  }
  
  let testDays = new Array()

  props.testDays.forEach((el) => {
    date = new Date(el)
    testDays.push({ year: Number(date.getFullYear()), month:  Number(date.getMonth())+1, day:  Number(date.getDate()), className: 'orangeDay'})
  })
  props.unTestDays.forEach((el) => {
    date = new Date(el)
    testDays.push({ year: Number(date.getFullYear()), month:  Number(date.getMonth())+1, day:  Number(date.getDate()), className: 'greenDay'})
  })

  return (
    <div>
      <Calendar
      value={selectedDay}
      onChange={OnChange}
      shouldHighlightWeekends
      colorPrimary="#707EFF"
      locale="en"
      calendarTodayClassName="today"
      customDaysClassName={testDays}
    />
    </div>
    
  );
};
export default MyCalendar
import React, {useState}from 'react';
import 'date-fns';
import "./timeStamp.module.css"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar , utils } from "react-modern-calendar-datepicker";
import {DefaultButton} from "../";
import MyPicker from "../MyTimePicker/index"

const TimeStamp = (props) => {
    let date = new Date()
    const defaultFrom = {
        year: Number(date.getFullYear()),
        month: Number(date.getMonth())+1,
        day: Number(date.getDate())
      };
      const defaultTo = {
        year: Number(date.getFullYear()),
        month: Number(date.getMonth()) + 1,
        day: Number(date.getDate()) + 1
      };
      const defaultValue = {
        from: defaultFrom,
        to: defaultTo,
      };
      const [selectedDayRange, setSelectedDayRange] = useState(defaultValue);   
      function onSelect(props){
        setSelectedDayRange(props)
        //ну и тут должна быть отпправка данных на бэк
      }

      return (
          <div className="cDiv">
            <Calendar
            minimumDate={utils().getToday()}
            value={selectedDayRange}
            onChange={onSelect}
            colorPrimary="#707EFF"
            colorPrimaryLight="#98a2f7"
            shouldHighlightWeekends
            calendarClassName="calendar"
            />
            <div className="wrapper">
              <div>
                <h1 className="text">Начальное время</h1>
                <MyPicker onChange={(name, value)=>console.log(name, value)}></MyPicker>
              </div>

              <div>
                <h1 className="text">Конечное время</h1>
                <MyPicker onChange={(name, value)=>console.log(name, value, "азааааваыв")}></MyPicker>
              </div>
            </div>
            
            
            <DefaultButton text="далее" handleClick={()=>null}></DefaultButton>
          </div>
      );
}

export default TimeStamp


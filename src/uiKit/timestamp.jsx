import React, {useState, Component}from 'react';
import 'date-fns';
import "./css/timestamp.css"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar , utils } from "react-modern-calendar-datepicker";
import Picker from 'react-mobile-picker-scroll';
import {DefaultButton} from "./Buttons";

class MyPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        hours: '09',
        minutes: '00',
      },
      optionGroups: {
        hours: ['00','01', '02', '03', '04' ,'05', '06','07','08','09',"10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        minutes: ["00",'01', '02', '03', '04' ,'05', '06','07','08','09',"10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
      }
    };
  }
 
  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));

    this.props.onChange(name, value)
  };
 
  render() {
    const {optionGroups, valueGroups} = this.state;
 
    return (
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={this.handleChange} />
    );
  }
}


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
  
      // const handleDateChange = (date) => {
      //   setSelectedDate(date);
      // };
        
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


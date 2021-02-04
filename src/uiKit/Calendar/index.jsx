import React, {useState}from 'react';
import ReactDOM from 'react-dom';
import "./calendar.module.css"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

const MyCalendar = (props) => {
  let date = new Date()
  let testDays = new Array()
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  let [showModal,setShowModal] = useState(false)
  const defaultValue = {
    year: Number(date.getFullYear()),
    month: Number(date.getMonth())+1,
    day: Number(date.getDate()),
  };
  const modal = showModal ? (
      <Modal>
        <div className="modal">
          <div>
            {selectedDay.year.toString() + "." + selectedDay.month.toString() +"." + selectedDay.day.toString() }
          </div>
          <button onClick={()=>setShowModal(!showModal)}>закрыть</button>
        </div>
      </Modal>
    ) : null;

  function OnChange(event){
    setSelectedDay(event)
    setShowModal(!showModal)
  }
  
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
    {modal}
    </div>
  );
};
export default MyCalendar
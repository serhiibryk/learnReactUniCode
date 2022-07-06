import React from "react";
import moment from "moment";
import styled from "styled-components";
import Monitor from "../Components/ComponentsLesson107/Monitor";
import CalendarGrid from "../Components/ComponentsLesson107/CalendarGrid";
import Title from "../Components/ComponentsLesson107/Title";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

const CalendarWrepper = styled.div`
  border-top: 2px solid #737374;
  border-left: 2px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px black;
`;

const Lesson107 = () => {

  moment.updateLocale("en", { week: { dow: 1 } });
  // const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  const totalDays = 42;

  // window.momemt = moment;

  const prevHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };

  const todayHandler = () => {
    setToday(moment());
  };

  const nextHandler = () => {
    setToday(prev => prev.clone().add(1, 'month'));
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(res => {
        setEvents(res);
        console.log('Response', res);
      });
  }, []);


  // const startDateQuery = startDay.clone().format('X');
  // const endDateQuery = startDay.clone().add(42, 'days').format('X');

  // const useEvents = () => {
  //   const copy = { ...DataBase };
  //   copy.events.filter(copy.events.date >= startDateQuery && copy.events.date <= endDateQuery);
  //   setEvents(copy);
  // }

  return (
    <CalendarWrepper>
      <Title />
      <Monitor
        today={today}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
      />
      <CalendarGrid
        startDay={startDay}
        today={today}
        totalDays={totalDays}
        events={events}
      // event={event}
      // useEvents={useEvents}
      />
    </CalendarWrepper>
  );
};

export default Lesson107;

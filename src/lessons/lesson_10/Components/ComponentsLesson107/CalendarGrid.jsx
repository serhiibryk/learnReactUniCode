import moment from "moment";
import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${props => props.isHeader ? '#1e1f21' : '#484848'};
  ${props => props.isHeader && 'border-bottom: 1px solid #484848'};     /*?????????????*/
`;

const CellWrapper = styled.div`
  min-width: 140px;
  min-height: ${props => props.isHeader ? 24 : 80}px;
  background-color: ${props => props.isWeekend ? 'black' : '#1e1f21'};
  color: ${props => props.isSelectedMonth ? '#dddcdd' : '#555759'};
`;

const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  ${props => props.paddingRight && `padding-right: ${props.paddingRight * 8}px`}
`;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

const CurrentDay = styled.div`
height: 100%;
width: 100%;
background: #f00;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`;

const ShowDayWrapper = styled.div`
display: flex;
justify-content: flex-end;
`;

const EventListWrapper = styled.ul`
margin: unset;
list-style-position: inside;
padding-left: 4px;
`;

const EventItemWrapper = styled.button`
position: relative;
left: -14px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
width: 114px;
border: unset;
background: unset;
color: #DDDDDD;
cursor: pointer;
margin: 0;
padding: 0;


`;

const CalendarGrid = ({ startDay, today, totalDays, events }) => {
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());

  const isCurrentDay = (day) => moment().isSame(day, 'day');
  const isSelectedMonth = (day) => today.isSame(day, 'month');

  return (
    <>
      <GridWrapper isHeader>
        {[...Array(7)].map((_, index) => (
          <CellWrapper
            key={index}
            isHeader
            isSelectedMonth>
            <RowInCell
              justifyContent={'flex-end'}
              paddingRight={1}
            >
              {moment().day(index + 1).format('ddd')}
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
      <GridWrapper>
        {daysArray.map((dayItem) => (
          <CellWrapper
            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            key={dayItem.format("DDMMYYYY")}
            isSelectedMonth={isSelectedMonth(dayItem)}
          >

            <RowInCell
              justifyContent={'flex-end'}
            >
              <ShowDayWrapper>
                <DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </DayWrapper>
              </ShowDayWrapper>
              <EventListWrapper>
                {/* <div>S:{dayItem.format('X')}</div> */}
                {
                  events
                    .filter(event => event.date >= dayItem.format('X') && event.date <= dayItem.clone().endOf('day').format('X'))
                    .map(event => (
                      <li key={event.id}>
                        <EventItemWrapper>
                          {event.title}
                        </EventItemWrapper>
                      </li>
                    ))
                }
                {/* <div>E:{dayItem.clone().endOf('day').format('X')}</div> */}
              </EventListWrapper>
            </RowInCell>
          </CellWrapper>
        ))
        }
      </GridWrapper >
    </>
  );
};

export default CalendarGrid;

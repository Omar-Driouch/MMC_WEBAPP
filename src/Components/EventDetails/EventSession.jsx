import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { dateFormat } from "../../Helpers/helpers";
const SessionCard = styled.div`
  width: 300px;
  padding: 15px;
  border: 1px solid #ffb703;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  gap: 15px;
  transition: 0.3 ease;
  &:hover {
    background: #f9f9f9;
  }
`;
const SessionNumber = styled.h1`
  font-size: 22px;
  color: #333;
  background:#ffb703;
  width:60px;
  height:60px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top:-30px;
  border-radius:50%;
`;
const SessionName = styled.h2`
  font-size: 18px;
  color: #333;
  font-weight: 800;
  margin-top:50px;
  text-align:center;
  `;
const Date = styled.div`
  padding: 5px;
  font-size: 14px;
  color: #ffb703;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Hours = styled.div`
  display: flex;
  gap: 15px;
`;
const Hour = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
`;

const EventSession = ({ session, index }) => {
  const {year,month,day,hours,minutes} = dateFormat(session?.startDate);
  const endDate = dateFormat(session?.startDate);
  return (
    <SessionCard>
      <SessionNumber>0{index + 1}</SessionNumber>
      <SessionName>{session?.name}</SessionName>
      <Date>
        <CalendarMonthRoundedIcon style={{ fontSize: "16px" }} />
        {day} {month},{year}
      </Date>
      <Hours>
        <Hour>
          <AccessTimeIcon style={{ fontSize: "16px" }} />
          {hours}:{minutes}
        </Hour>
        -
        <Hour>
          <AccessTimeIcon style={{ fontSize: "16px" }} />
          {endDate["hours"]}:{endDate["minutes"]}
        </Hour>
      </Hours>
    </SessionCard>
  );
};

export default EventSession

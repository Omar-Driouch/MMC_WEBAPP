import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png"
import styled from "styled-components";
import EastIcon from '@mui/icons-material/East';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { dateFormat } from "../../Helpers/helpers";
import axios from "axios"
const primary = "#FFB703";
const EventCard = styled(Link)`
  width: 350px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  overflow:hidden;
  position:relative;
  background:#f9f9f9;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }
`;
const EventDate = styled.div`
   color:#fff;
   background:dodgerblue;
   font-size:14px;
   padding:5px;
   display:inline-flex;
   align-items:flex-start;
   gap:5px;
   font-weight:400;
   margin-top:15px;
`
const EventImageBox = styled.div`
  width: 100%;
  // height: 320px;
  overflow:hidden;
`;
const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition:0.3s linear;
  &:hover{
    transform:scale(1.05);
  };
`;
const EventTitle = styled.h1`
  margin-top: 8px;
  font-size: 20px;
  text-transform:capitalize;
  font-weight: 500;
`;
const EventDescription = styled.p`
  font-size: 14px;
  color: #999;
  margin-top: 8px;
`;
const EventLink = styled(Link)`
   display:flex;
   position:relative;
   align-items:center;
   justify-content:center;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;   gap:10px;
   margin-top:16px;
   text-transform: capitalize;
  background-color: ${primary};
   color:#fff;
   font-weight:500;
   width:150px;
   height:50px;
`;
const BtnEffect = styled.div`
position:absolute;
inset:0;
height:100%;
width:100%;
transform:scale(0);
transition:0.3s linear;
${EventLink}:hover &{
 transform:scale(1);
 background:#ffffff34;
}
`


const Event = ({ event }) => {
  const {day,year,month} = dateFormat(event?.startDate);
  const currentDate = new Date();
  const eventDate = new Date(event?.startDate);
  // useEffect(()=>{
  //   export const fetchImage = async()=>{
      
  //   }
  // })
  // event-card  px-3 py-5 hover:shadow-md hover:border-[1px] hover:border-primary w-[320px]
  return (
    <EventCard to={`/events/${event?.id}/${event?.cityId}/${event?.programId}`} className={`event-card ${eventDate < currentDate ? 'expired':''}`} key={event.id}>
      <EventImageBox>
        <EventImage
          // src={event?.imagePath}
          src={event?.imagePath}
          alt="eventImage"
        />
      </EventImageBox>
      <EventDate>
        <CalendarMonthRoundedIcon style={{fontSize:"18px"}}/>
         {day},{month} {year}
      </EventDate>
      <EventTitle>{event?.title}</EventTitle>
      {/* <EventDescription>
        {event?.description?.substring(0,120)}...
      </EventDescription> */}
      <EventLink
        to={`/events/${event?.id}/${event?.cityId}/${event?.programId}/${event?.themeId}`}
      >
        <BtnEffect/>
        read more
        <EastIcon/>
      </EventLink>
    </EventCard>
  );
};
export default Event;

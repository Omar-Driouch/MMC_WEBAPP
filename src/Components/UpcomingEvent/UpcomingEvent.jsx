import React, { useEffect, useState } from 'react'
import Heading from '../StyledComponents/Heading';
import styled from "styled-components"
import EastIcon from '@mui/icons-material/East';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {useDispatch , useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { fetchEvents, getUpEvent } from '../../features/eventSlice';
import { fetchCities } from '../../features/citySlice';
import UpcomingEventSkeleton from './UpcomingEventSkeleton';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import { dateFormat } from '../../Helpers/helpers';
const third = "#05A6F0";
const primary = "#FFB703";
const Container = styled.div`
   position:relative;
   @media (max-width:1250px){
    padding:0 30px;
  }
`
const Effect = styled.div`
 position:absolute;
 width:500px;
 height:200px;
 transform:rotate(12deg);
 left:-100px;
 filter:blur(200px);
 top:100px;
 background:${third};
`
const Content = styled.div`
max-width:1200px;
margin:100px auto;
position:relative;
z-index:10;
`
const UpcomminEventCard = styled.article`
border:1px solid #f1f1f1;
background:#fff;
margin-top:40px;
width:100%;
display:flex;
gap:40px;
@media (max-width:992px){
  flex-direction:column;
}
`;

const Box = styled.div`
 height:600px;
 flex:1;
 object-fit:cover;
`;
const Image = styled.img`
   width:100%;
   height:100%;
`;

const Details = styled.div`
flex:1;
display:flex;
flex-direction:column;
 justify-content:center;
 align-items:flex-start;
 gap:32px;
 @media (max-width:992px){
  padding:20px;
}
`;

const EventTitle = styled.h1`
     font-size:25px;
     font-weight:500;
     @media (max-width:768px){
      font-size:20px;
    }
`;
const EventDescription = styled.p`
@media (max-width:768px){
  font-size:14px;
}
`
const TimerBox = styled.div`
 display:flex;
 flex-wrap:wrap;
 gap:20px; 
`;

const Item = styled.div`
 display:flex;
 flex-direction:column;
 gap:8px;
 align-items:center;
 justify-content:center;
 height:100px;
 width:100px;
 @media (max-width:768px){
  height:80px;
  width:80px;
}
 @media (max-width:576px){
  height:40px;
  width:40px;
}
`;
const Span = styled.span`
  font-size:18px;
  text-transform:capitalize;
  color:${primary};
  @media (max-width:768px){
    font-size:12px;
  }
`
const TimeLeft = styled(Span)`
 font-size:30px;
 @media (max-width:768px){
  font-size:20px;
}
`;
const ReadMoreBtn = styled(Link)`
padding:12px 30px;
position:relative;
overflow:hidden;
background:${primary};
text-transform:capitalize;
display:flex;
align-items:center;
gap:4px;
font-weight:400;
color:#fff;
`;
const BtnEffect = styled.div`
position:absolute;
inset:0;
height:100%;
width:100%;
transform:scale(0);
transition:0.3s linear;
${ReadMoreBtn}:hover &{
 transform:scale(1);
 background:#ffffff34;
}
`
const EventDate = styled.div`
  color:${third};
  font-weight:500;
  display:flex;
  align-items:flex-start;
  gap:5px;
`
const EventHour = styled.div`
  color:${third};
  font-weight:500;
  display:flex;
  align-items:flex-start;
  gap:5px;
`

const UpcomingEvent = () => {
  const dispatch = useDispatch();
  const events = useSelector(state=>state.event.events);
  const status = useSelector(state=>state.event.status);
  const error = useSelector(state=>state.event.error);
  const upcomingEvent = useSelector(state=>state.event.upcomingEvent);
  const length = upcomingEvent?.length;
  useEffect(()=>{
    dispatch(fetchEvents()).then((res)=>{
      dispatch(getUpEvent());
    });
  },[dispatch]);
    // const getUpcomingEvent = ()=>{
    //   const currentDate = new Date();
    // const upcomingEvents = events?.filter(event => {
    //   const eventDate = new Date(event?.startDate);
    //   return eventDate > currentDate;
    // });
    // return upcomingEvents.length > 0 ? upcomingEvents[0] : null;
    // }
    // const upcomingEvent = getUpcomingEvent();



    // const targetDate = new Date(upcomingEvent?.startDate);
    // const calculateTimeLeft = () => {
    //   const difference = targetDate - new Date();
    //   let timeLeft = {};
  
    //   if (difference > 0) {
    //     const days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
    //     const hours = Math.floor(difference / (1000 * 60 * 60 * 24)); 
    //     const minutes = Math.floor((difference / 1000 / 60) % 60);
    //     const seconds = Math.floor((difference / 1000) % 60);
    //     timeLeft = {
    //       days: days < 10 ? `0${days}` : days,
    //       hours:hours < 10 ? `0${hours}` : hours ,
    //       minutes: minutes < 10 ? `0${minutes}` : minutes,
    //       seconds: seconds < 10 ? `0${seconds}` : seconds
    //     };
    //   }
  
    //   return timeLeft;
    // };
    // const [timeLeft , setTimeLeft] = useState(calculateTimeLeft());
    // useEffect(()=>{
    //     const timer = setTimeout(()=>{
    //            setTimeLeft(calculateTimeLeft());
    //     },1000)
    //     return ()=>clearTimeout(timer);
    // })
    

    const {day,year,month,hours,minutes} = dateFormat(upcomingEvent[length - 1]?.startDate);
  return (
    <Container>
      {/* <Effect/> */}
        <Content>
          <Heading name="upcomming event"/>
        {/* <h1 className='capitalize text-slate-500 text-3xl font-[400] inline-block relative before:absolute before:content-[""] before:w-1/3 before:h-[4px] before:-top-[20px] before:left-0 before:bg-primary'>upcoming event</h1> */}
        {/* {status === "failed" && <ErrorAlert error={error}/>} */}
        {/* {status === "loading" && <UpcomingEventSkeleton/>} */}
        {/* {status === "succeded" &&  */}
        {upcomingEvent?.length > 0 &&
        <UpcomminEventCard>
            <Box>
                <Image src={upcomingEvent[length - 1]?.imagePath}/>
            </Box>
            <Details>
                <EventTitle>{upcomingEvent[length - 1]?.title}</EventTitle>
                <EventDate><CalendarMonthRoundedIcon style={{fontSize:"20px"}}/>{day},{month} {year}</EventDate>
                <EventHour><AccessTimeIcon style={{fontSize:"20px"}}/>{hours}:{minutes}</EventHour>
                <EventDescription>{upcomingEvent[length - 1]?.description?.substring(0,400)}..</EventDescription>
                <TimerBox>
                  {/* <div>{Object.keys(timeLeft).length===0 && "event is started"}</div> */}
                  {/* <Item>
                    <Span>day</Span>
                    <TimeLeft>{timeLeft.days}</TimeLeft>
                  </Item>
                  <Item>
                  <Span>hour</Span>
                  <TimeLeft>{timeLeft.hours}</TimeLeft>
                  </Item>
                  <Item>
                  <Span>minutes</Span>
                  <TimeLeft>{timeLeft.minutes}</TimeLeft>
                  </Item>
                  <Item>
                  <Span>secondes</Span>
                  <TimeLeft>{timeLeft.seconds}</TimeLeft>
                </Item> */}
                </TimerBox>
                <ReadMoreBtn to={`/events/${upcomingEvent[length - 1]?.id}/${upcomingEvent[length - 1]?.cityId}/${upcomingEvent[length - 1]?.programId}/${upcomingEvent[length - 1]?.themeId}`}>
                  read more
                  <BtnEffect/>
                  <EastIcon/>
                </ReadMoreBtn>
            </Details>
        </UpcomminEventCard>
        }
         {/* } */}
        </Content>
    </Container>
  )
}

export default UpcomingEvent
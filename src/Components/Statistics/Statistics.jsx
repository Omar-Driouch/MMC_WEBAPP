import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from "react-redux"
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import VideocamIcon from '@mui/icons-material/Videocam';
import styled from "styled-components"
import { fetchSpeakers } from '../../features/speakerSlice';
import { fetchEvents } from '../../features/eventSlice';
import { fetchSessions } from '../../features/sessionSlice';
import { fetchPartners } from '../../features/partnerSlice';
import { colors } from '../../theme';
import { fetchPrograms } from '../../features/programSlice';

const {yellow} = colors;
const StatisticsContainer = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
gap:16px;
align-items:center;
justify-content:center;
// border-radius:20px;
min-height:200px;
// transform: translateY(-100px);
position:relative;
background:#fff;
max-width:1100px;
margin:0 auto;
margin-top:50px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
   rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
@media (max-width:1200px){
  max-width:1000px;
}
`;
const StatisticItem = styled.article`
  padding:8px;
  display:flex;
  justify-content:center;
  gap:20px;
  align-items:center;
  height:75%;
  width:180px;
  @media (max-width:576px){
    width:300px;
  }
`;
const StatisticIcon = styled.div`
 width:50px;
 height:50px;
 display:flex;
 align-items:center;
 justify-content:center;
 border-radius:50%;
 border:1px solid ${yellow};
 background-image: repeating-linear-gradient(45deg, rgba(255, 183,3,0.06) 0px, rgba(255, 183,3,0.06) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(255,255,244),rgb(255,255,244));
//  background:${yellow};
 color:${yellow};
`;
const Box = styled.div`
  display:flex;
  flex-direction:column;
  gap:12px;
  align-items:flex-start;
`
const StatisticName = styled.h1`
 font-size:16px;
 font-weight:500;
 text-transform:uppercase;
 color:${yellow};
`;
const Count = styled.div`
 color:#333;
 font-size:18px;
`
const Statistics = () => {
  
  const dispatch = useDispatch();
  const eventsLength = useSelector(state=>state.event.events)?.length;
  const speakersLength = useSelector(state=>state.speaker.speakers)?.length;
  const partnersLength = useSelector(state=>state.partner.partners)?.length;
  const sessionsLength = useSelector(state=>state.session.sessions)?.length;
  const programsLength = useSelector(state=>state.program.programs)?.length;
  
  const [statistics , setStatistics] =  useState([
      {id:1 , name:"programs",count:0,icon:<VideocamIcon/>},
      {id:2 , name:"events",count:0,icon:<ConfirmationNumberRoundedIcon/>},
      {id:3 , name:"sessions",count:0,icon:<CalendarTodayRoundedIcon/>},
      {id:4 , name:"speakers",count:0,icon:<RecordVoiceOverRoundedIcon/>},
      {id:5 , name:"partners",count:0,icon:<HandshakeRoundedIcon/>}
  ]);

    useEffect(()=>{
       dispatch(fetchEvents());
       dispatch(fetchPrograms());
       dispatch(fetchSpeakers());
       dispatch(fetchSessions());
       dispatch(fetchPartners());
       setStatistics(prev =>{
        return prev.map((s)=>{
           if(s.name === "events"){
             s.count = eventsLength;
             return s;
           }else if (s.name === "speakers"){
            s.count = speakersLength;
            return s;
           }else if (s.name === "partners"){
            s.count = partnersLength;
            return s;
           }else if (s.name === "sessions"){
            s.count = sessionsLength;
            return s;
           }else if (s.name === "programs"){
            s.count = programsLength;
            return s;
           }
           return s;
        })
       })
    },[dispatch , eventsLength , speakersLength , partnersLength,sessionsLength])
  return (
    <StatisticsContainer>
            {statistics.map((statistic)=>(
                <StatisticItem key={statistic.id}>
                     <StatisticIcon>
                        {statistic.icon}
                     </StatisticIcon>
                     <Box>
                     <StatisticName>{statistic.name}</StatisticName>
                     <Count>+{statistic.count}</Count>
                     </Box>
                </StatisticItem>
            ))}      
    </StatisticsContainer>
  )
}

export default Statistics
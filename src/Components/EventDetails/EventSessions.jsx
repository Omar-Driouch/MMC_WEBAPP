import React, { useEffect } from 'react'
import styled from "styled-components";
import { fetchSessions } from '../../features/sessionSlice';
import {useDispatch , useSelector} from "react-redux"
import EventSession from './EventSession';
import Loader from '../Loader/Loader';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
const SessionsList = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:35px;
  margin-top:40px;
`;
const EventSessionsContainer = styled.div`
 margin:50px 0;
`
const EventSessionsTitle = styled.div`
  font-size:20px;
  font-weight:600;
  color:#333;
  position:relative;
  &:before{
    position:absolute;
    content:"";
    top:-10px;
    left:0;
    width:30px;
    height:5px;
    background:#FFB703;
  }
`

const EventSessions = ({eventSessions , status , error}) => {
    // const dispatch = useDispatch();
    // const arr = [1,2,3,4,5,6];
    // const sessions = useSelector(state=>state.session.sessions)?.filter(s=>s.eventId === event?.id);
    // useEffect(()=>{
    //   //  dispatch(fetchSessions());
    // },[dispatch])
  return (
    <EventSessionsContainer>
      <EventSessionsTitle>Sessions</EventSessionsTitle>
      {(status === "failed" && error !== null) && <ErrorAlert error={error}/>}
      {status === "loading" && 
      <SessionsList>
        <Loader/>
      </SessionsList>
      }
      {status === "succeded" && 
      <SessionsList>
        {eventSessions?.map((session,index)=>(
          <EventSession session={session} index={index} key={session?.id}/>
        ))}      
      </SessionsList>
       }
        {/* {sessions.map((session)=>(
            <EventSession event={event} key={session?.id} session={session}/>
            ))} */}
    </EventSessionsContainer>
  )
}

export default EventSessions
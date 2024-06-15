import React from 'react'
import styled from "styled-components"
import Loader from '../Components/Loader/Loader'
import Event from '../Components/NextEvents/Event'
import ErrorAlert from '../Components/ErrorAlert/ErrorAlert'
const ManagedEventsContainer = styled.div`
 margin:50px 0;
`
const ManagedEventsTitle = styled.div`
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
const EventsList = styled.div`
display:flex;
// justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:50px;
margin-top:20px;
`
const SpeakerEvents = ({speakerEvents , status,error}) => {
  return (
    <ManagedEventsContainer>
    <ManagedEventsTitle>
      Managed Events
    </ManagedEventsTitle>
     {status==="loading" && <Loader/>}
     {(status==="failed" && error !== null)  && <ErrorAlert error={error}/>}
     {status=== "succeded" &&
     <EventsList>
        {speakerEvents?.map((event)=>(
            <Event event={event} key={event?.id}/>
        ))}
     </EventsList>
     }
  </ManagedEventsContainer>
  )
}

export default SpeakerEvents
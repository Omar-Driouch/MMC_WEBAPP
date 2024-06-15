import React from 'react'
import styled from "styled-components";
import Speaker from '../../Speakers/Speaker';
import Loader from '../Loader/Loader';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
const SpeakersList = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:35px;
  margin-top:16px;
`;
const EventSpeakersContainer = styled.div`
 margin:50px 0;
`
const EventSpeakersTitle = styled.div`
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
const EventSpeakers = ({eventSpeakers , status , error}) => {
  // const arr = [1,2,3,4,5,6];
  return (
    <EventSpeakersContainer>
      <EventSpeakersTitle>Speakers</EventSpeakersTitle>
      {(status === "failed" && error !== null) && <ErrorAlert error={error}/>}
      {status === "loading" &&
      <SpeakersList>
        <Loader/>
      </SpeakersList>
      }
      {status === "succeded" &&
      <SpeakersList>
        {eventSpeakers?.map((speaker)=>(
          
          <Speaker speaker={speaker} key={speaker}/>
          )
          )}
      </SpeakersList>
        }
    </EventSpeakersContainer>
  )
}

export default EventSpeakers
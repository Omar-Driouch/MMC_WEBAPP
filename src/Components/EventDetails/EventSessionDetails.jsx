import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from "styled-components";
import {useDispatch , useSelector} from "react-redux";
import { fetchEventById } from '../../features/eventSlice';
import { fetchSessionById } from '../../features/sessionSlice';
import Speaker from '../../Speakers/Speaker';
import { fetchSpeakers } from '../../features/speakerSlice';
const SessionDetailsContainer = styled.div`
  padding:50px 0;
`;
const Content = styled.div`
  width: 1200px;
  margin: 100px auto;
`;
const Path = styled.div`
 color:#aaabbb;
 display:flex;
 gap:30px;
 text-transform:capitalize;
 font-weight:300;
 margin-bottom:20px;
 `
 const Span = styled.span`
 position:relative;
 &:not(:last-child):before{
  position:absolute;
  content:"";
  background:transparent;
  width:8px;
  height:8px;
  border-top:3px solid #aaabbb;
  border-right:3px solid #aaabbb;
  transform:rotate(45deg) translateY(-50%);
  top:50%;
  right:-15px;
 }
 `;
const SpeakersList = styled.div`
display:flex;
justify-content:start;
align-items:flex-start;
flex-wrap:wrap;
margin-top:20px;
gap:50px;
`;

const EventSessionDetails = () => {
    const {sessionId , eventId} = useParams();
    const dispatch = useDispatch();
    const event = useSelector(state=>state.event.event);
    const session = useSelector(state=>state.session.session);
    const speakers = useSelector(state=>state.speaker.speakers);

    useEffect(()=>{
        window.scroll(0, 0);
        dispatch(fetchEventById(eventId));
        dispatch(fetchSessionById(sessionId));
        dispatch(fetchSpeakers());
    },[dispatch,sessionId , eventId])
  return (
    <SessionDetailsContainer>
        <Content>
            <Path>
                <Span><Link to="/">Home</Link></Span>
                <Span><Link to="/events">Events</Link></Span>
                <Span><Link to={`/events/${event?.id}`}>{event?.title}</Link></Span>
                <Span>{session?.name}</Span>
            </Path>
            <h1 className='text-lg text-primary'>Session Overview:</h1>
            <p className='mb-10'>{session?.description}</p>
            <h1 className='text-lg text-primary'>Session speaked By:</h1>
            <SpeakersList>
                {speakers.map((s)=>(
                    <Speaker speaker={s} key={s.id}/>
                ))}
            </SpeakersList>
        </Content>
    </SessionDetailsContainer>
  )
}

export default EventSessionDetails
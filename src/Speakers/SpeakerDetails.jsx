import React, { useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux";
import styled from "styled-components";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import img from "../assets/said_wahid.png"
import { fetchSpeakerById, fetchSpeakerEvents } from '../features/speakerSlice';
import SpeakerEvents from './SpeakerEvents';
import Loader from '../Components/Loader/Loader';
const SpeakerDetailContainer = styled.div`
  
`
const SpeakerHeading = styled.div`
width:100%;
height:350px;
display:flex;
position:relative;
top:90px;
margin-bottom:120px;
left:0;
align-items:center;
justify-content:center;
background-image: linear-gradient(45deg, transparent 0%, transparent 51%,rgba(130, 130, 130,0.05) 51%, rgba(130, 130, 130,0.05) 71%,transparent 71%, transparent 100%),linear-gradient(0deg, transparent 0%, transparent 69%,rgba(130, 130, 130,0.05) 69%, rgba(130, 130, 130,0.05) 84%,transparent 84%, transparent 100%),linear-gradient(135deg, transparent 0%, transparent 37%,rgba(130, 130, 130,0.05) 37%, rgba(130, 130, 130,0.05) 73%,transparent 73%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
 `
 const Box = styled.div`
 width:1200px;
 display:flex;
 flex-direction:column;
 gap:30px;
 justify-content:center;
 align-items:center;
 margin:0 auto;
`
const HeadingTitle = styled.h1`
font-size:30px;
 font-weight:400;
 color:#FFB703;
 text-transform:capitalize;
 display:flex;
 align-items:flex-start;
 flex-wrap:wrap;
 justify-content:center;
 gap:80px;
 @media (max-width:1150px){
    font-size:30px;
    gap:40px;
 }
 @media (max-width:768px){
    font-size:20px;
    gap:20px;
 }
 @media (max-width:576px){
    gap:20px;
    font-size:14px;
 }
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
`

const Content = styled.div`
  max-width:1200px;
  margin:50px auto;
  `
  const SpeakerBox = styled.div`
  display:flex;
  justify-content:center;
  gap:20px;
  margin:0 auto;
  height:600px;
`
const SpeakerImageBox = styled.div`
 flex:1;
 background:#fecb22;
 box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px 0px;
`
const SpeakerInfo = styled.div`
  flex:1;
  background:#f2f2f2;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`;

const SpeakerName = styled.div`
 font-size:25px;
`


const SpeakerDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const speaker = useSelector(state=>state.speaker.speaker);
    const status = useSelector(state=>state.speaker.status);
    const speakerEvents = useSelector(state=>state.speaker.speakerEvents);
    const speakerEventsStatus = useSelector(state=>state.speaker.speakerEventsStatus);
    const speakerEventsError = useSelector(state=>state.speaker.speakerEventsError);
    useEffect(()=>{
        window.scroll(0,0);
        dispatch(fetchSpeakerById(id));
        dispatch(fetchSpeakerEvents(id));
     },[dispatch,id])
  return (
    <SpeakerDetailContainer>
         <SpeakerHeading>
      <Box>
      <HeadingTitle><span>Speakers</span>  <span>intervenants</span>  <span>ناطق</span>  <span>ⵟⴰⴳⵢⴰⵏⵉⵏ</span></HeadingTitle>
      <Path>
            <Span><Link to="/">Home</Link></Span>
            <Span><Link to="/speakers">speakers</Link></Span>
            <Span>{speaker?.firstname} {speaker?.lastname}</Span>
        </Path>
      </Box>
    </SpeakerHeading>
      <Content>
        {status === "loading" && <Loader/>}
        {status === "succeded" &&
        <SpeakerBox>
            <SpeakerImageBox>
                <img src={speaker?.picturePath} className='w-full h-full' alt="" />
            </SpeakerImageBox>
            <SpeakerInfo>
              <SpeakerName>{speaker?.firstname} {speaker?.lastname}</SpeakerName>
              <h2 className='p-2 bg-primary text-white my-3'>{speaker?.bio}</h2>
              <p className='mb-3'>{speaker?.email}</p>
              <p className='mb-3'>{speaker?.mvp ? "true":"false"}</p>
              <p className='mb-3'>{speaker?.mct ? "true":"false"}</p>
            </SpeakerInfo>
        </SpeakerBox>
        }
        <SpeakerEvents speakerEvents={speakerEvents} status={speakerEventsStatus} error={speakerEventsError}/>
      </Content>
    </SpeakerDetailContainer>
  )
}

export default SpeakerDetails
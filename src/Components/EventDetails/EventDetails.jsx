import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PlaceIcon from "@mui/icons-material/Place";
import { fetchEventById, fetchEventPartners, fetchEventSessions, fetchEventSpeakers } from "../../features/eventSlice";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventSpeakers from "./EventSpeakers";
import EventPartners from "./EventPartners";
import EventSessions from "./EventSessions";
import EventDetailsSkeleton from "./EventDetailsSkeleton";
import { fetchProgramById, fetchPrograms } from "../../features/programSlice";
import { fetchCities, fetchCityById } from "../../features/citySlice";
import { fetchThemeById } from "../../features/themeSlice";
import Overview from "./Overview";
import EventSession from "./EventSession";
import { dateFormat } from "../../Helpers/helpers";
import React from "react";
const EventDetailsContainer = styled.div`
//  padding:50px 0;
`;
const EventDetailsHeading = styled.div`
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
 const HeadingBox = styled.div`
 width:1200px;
 display:flex;
 flex-direction:column;
 gap:30px;
 justify-content:center;
 align-items:center;
 margin:0 auto;
`
const HeadingTitle = styled.h1`
font-size:50px;
    font-weight:600;
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
const Content = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  @media (max-width:1250px){
    padding:0 30px;
  }
`;
const Box = styled.div`
  display: flex;
  padding:2px;
  overflow:hidden;
  gap: 20px;
  margin-top: ${(props)=>props.type === 'box1'?'30px':'10px'};
  flex-direction: ${(props)=>props.type === 'box1'?'row':'column'};
  width:100%;
  @media (max-width : 991px){
    flex-direction: column;
  };
  `;
  const LeftBox = styled.div`
  flex: 3;
  @media (max-width : 991px){
    flex:1;
  };
  `;
  const LeftImage = styled.img`
  width: 100%;
  height:100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  @media (max-width : 991px){
    height:500px !important;
  };
  
`;
const RightBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const RightImage = styled.img`
  width: 100%;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
const EventTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
  text-transform: capitalize;
`;
const Details = styled.div`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-wrap:wrap;
  gap: 30px;
  color: #fff;
`;
const Address = styled.div`
  display: flex;
  gap: 5px;
  padding:12px 25px;
  background:#f2f2f2;
  // border-bottom:1px solid #FFB703;
  color:#FFB703;
`;

// const StartDate = styled.div`
//   display: flex;
//   gap: 5px;
//   padding: 10px;
//   background:#FFB703;
// `;

// const Theme = styled.div`
//   color: #ffb703;
//   box-shadow: rgba(255, 180, 3, 0.2) 0px 0px 0px 1px;
//   margin-top: 20px;
//   padding: 10px;
//   display: inline-block;
// `;

// const BottomDetails = styled(Box)`
//   border-bottom: 1px solid #f4f4f4;
//   width: 880px;
//   margin-top:50px;
//   padding:0;
// `;
// const Button = styled.button`
//   padding: 8px 15px;
//   color: ${(props) => (props.active ==='true' ? "#ffb703" : "#333")};
//   border-bottom: ${(props) =>
//     props.active==='true' ? "2px solid #ffb703" : "1px solid #f4f4f4"};
// `;
// const Overview = styled.div`
//   color:#999;
// `;

const RegisterBtn = styled(Link)`
position:relative;
overflow:hidden;
background:#ffb703;
text-transform:uppercase;
display:flex;
justify-content:center;
font-size:18px;
width:200px;
height:80px;
margin:100px auto;
align-items:center;
gap:10px;
font-weight:600;
color:#fff;
`;
const RegisterBtnEffect = styled.div`
 position:absolute;
 inset:0;
 height:100%;
 width:100%;
 transform:scale(0);
 transition:0.3s all;
 ${RegisterBtn}:hover &{
   transform:scale(1);
   background:#ffffff34;
 }
`
const Path = styled.div`
 color:#aaabbb;
 display:flex;
 gap:30px;
 text-transform:capitalize;
 font-weight:300;
 margin-bottom:20px;
 `;
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

// const EventProgramTitle = styled.div`
//   display: flex;
//   gap: 5px;
//   padding: 10px;
//   text-transform:capitalize;
//   background:#FFB703;
// `

const EventDetails = () => {
  let { id } = useParams();
  const { eventCityId } = useParams();
  const { eventProgramId } = useParams();
  const { eventThemeId } = useParams();
  // const [state,setState] = useState({
  //   isOverview:true,
  //   isSessions:false,
  //   isSpeakers:false,
  //   isPartners:false,
  //   isSponsors:false
  // })
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event.event);
  const status = useSelector((state) => state.event.status);
  const eventProgram = useSelector(state=>state.program.program);
  const eventCity = useSelector(state=>state.city.city);
  const eventTheme = useSelector(state=>state.theme.theme);
  const eventThemeStatus = useSelector(state=>state.theme.status);
  const eventProgramStatus = useSelector(state=>state.program.status);
  const eventCityStatus = useSelector(state=>state.city.status);
  
  const eventSessions = useSelector(state=>state.event.eventSessions);
  const eventSessionsStatus = useSelector(state=>state.event.eventSessionsStatus);
  const eventSessionsError = useSelector(state=>state.event.eventSessionsError);

  const eventPartners = useSelector(state=>state.event.eventPartners);
  const eventPartnersStatus = useSelector(state=>state.event.eventPartnersStatus);
  const eventPartnersError = useSelector(state=>state.event.eventPartnersError);
  
  const eventSpeakers = useSelector(state=>state.event.eventSpeakers);
  const eventSpeakersStatus = useSelector(state=>state.event.eventSpeakersStatus);
  const eventSpeakersError = useSelector(state=>state.event.eventSpeakersError);
  
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchEventById(id));
    dispatch(fetchCityById(eventCityId));
    dispatch(fetchProgramById(eventProgramId))
    dispatch(fetchThemeById(eventThemeId))
    dispatch(fetchEventSessions(id));
    dispatch(fetchEventPartners(id));
    dispatch(fetchEventSpeakers(id));
  }, [dispatch,id]);

  const {year , month , day , hours,minutes} = dateFormat(event?.startDate);
  const eventEndDate = dateFormat(event?.startDate);
  console.log(eventThemeStatus);
  return (
    <EventDetailsContainer>
      <EventDetailsHeading>
        <HeadingBox>
         <HeadingTitle>
         <span>Events</span>
         </HeadingTitle>
         <Path>
          <Span><Link to="/">Home</Link></Span>
          <Span><Link to="/events">Events</Link></Span>
          <Span>{event?.title}</Span>
        </Path>
        </HeadingBox>
      </EventDetailsHeading>
      {status === "loading" && <EventDetailsSkeleton/>}
      {status === "succeded" &&
      <Content>
        <EventTitle>{event?.title}</EventTitle>
        <Details>
          <Address>
            <PlaceIcon style={{ fontSize: "18px" }} />
            {event?.address} , {eventCity?.name}
          </Address>
          <Address>
            <CalendarMonthRoundedIcon style={{ fontSize: "18px" }} />
            {/* {event?.startDate} */}
            {day} {month},{year}  {hours}:{minutes} - {eventEndDate["hours"]}:{eventEndDate["minutes"]}
          </Address>
          {/* <Address>
            End:
            <CalendarMonthRoundedIcon style={{ fontSize: "18px" }} />
            {event?.endDate}
          </Address> */}
          {eventProgramStatus === "loading" ? <span style={{color:"#333"}}>Loading ...</span>:
          <Address><VideocamIcon style={{ fontSize: "18px" }}/>{eventProgram?.title}</Address>
        }
        {eventThemeStatus === "loading" ? <span style={{color:"#333"}}>Loading ...</span>:
          <Address>{eventTheme?.name}</Address>
         }
        </Details>
        <Box type='box1'>
          <LeftBox>
            <LeftImage src={event?.imagePath} />
          </LeftBox>
          {/* <RightBox>
            <RightImage src={event?.imagePath} />
            <RightImage src={event?.imagePath} />
            <RightImage src={event?.imagePath} />
          </RightBox> */}
        </Box>
        {/* <BottomDetails>
          <Button onClick={()=>{setState({isOverview:true,isSpeakers:false,isPartners:false,isSponsors:false})}} active={`${state.isOverview}`}>Overview</Button>
          <Button onClick={()=>{setState({isOverview:false,isSpeakers:true,isPartners:false,isSponsors:false})}} active={`${state.isSpeakers}`}>Speakers</Button>
          <Button onClick={()=>{setState({isOverview:false,isSessions:true,isSpeakers:false,isPartners:false,isSponsors:false})}} active={`${state.isSessions}`}>Sessions</Button>
          <Button onClick={()=>{setState({isOverview:false,isSpeakers:false,isPartners:true,isSponsors:false})}} active={`${state.isPartners}`}>Partners</Button>
          <Button onClick={()=>{setState({isOverview:false,isSpeakers:false,isPartners:false,isSponsors:true})}} active={`${state.isSponsors}`}>Sponsors</Button>
        </BottomDetails> */}
        <Box>
          <Overview overview={event?.description}/>
          <EventSessions eventSessions={eventSessions} status={eventSessionsStatus} error={eventSessionsError}/>
          <EventSpeakers eventSpeakers={eventSpeakers} status={eventSpeakersStatus} error={eventSpeakersError}/>
          <EventPartners eventPartners={eventPartners} status={eventPartnersStatus} error={eventPartnersError}/>
        </Box>
        {/* <Box>
          {state.isOverview &&
            <Overview>
            {event?.description}
            </Overview>
          }
          {
            state.isSpeakers &&
            <EventSpeakers/>
          }
          {
            state.isPartners &&
            <EventPartners/>
          }
          {
            state.isSessions &&
            <EventSessions event={event}/>
          }
        </Box> */}
      </Content>
      }
      <RegisterBtn to={`/registration/${event?.id}`}>
        <SaveAsIcon/>
        register now
        <RegisterBtnEffect/>
      </RegisterBtn>
    {/* } */}
    </EventDetailsContainer>
  );
};

export default EventDetails;

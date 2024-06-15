import React, { useEffect } from "react";
import Event from "./Event"
import {useSelector , useDispatch} from "react-redux"
import styled from "styled-components"
import Heading from "../StyledComponents/Heading";
import {fetchLatestEvents } from "../../features/eventSlice";
import { Link } from "react-router-dom";
import EventsSkeletonLoader from "../Events/EventsSkeletonLoader";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
const Container = styled.div`
@media (max-width:1250px){
  padding:0 30px;
}
`;
const Content = styled.div`
max-width:1200px;
margin:0 auto;
padding:50px 0 ;
`;
const Box = styled.div`
 display:flex;
 justify-content:space-between;
`
const EventCards =  styled.div`
 display:flex;
 gap:70px;
 flex-wrap:wrap;
 margin-top:40px;
 @media (max-width:1250px){
  gap:30px;
  justify-content:center;
}
`
const SeeMore = styled(Link)`
  color:#333;
  font-weight:400;
  transition:0.3s ease;
  &:hover{
    color:#FFB703;
    text-decoration:underline;
  }
`
const NextEvents = () => {
  const dispatch = useDispatch();
  const eventsList = useSelector(state=>state.event.latestEvents);
  const status = useSelector(state=>state.event.status);
  const error = useSelector(state=>state.event.error);
  useEffect(()=>{
      dispatch(fetchLatestEvents());
  },[dispatch])
  return (
    <Container>
    <Content>
      <Box>
       <Heading name="next events"/>
       <SeeMore to="/events">See More</SeeMore>
      </Box>
      {(status === "failed" && error !==null) && <ErrorAlert error={error}/>}
      {status === "loading" &&
      <EventCards>
        <EventsSkeletonLoader/>
        <EventsSkeletonLoader/>
        <EventsSkeletonLoader/>
      </EventCards>
        }
        {status === "succeded" &&
      <EventCards>
        {eventsList?.map((e)=>(
          <Event event={e} key={e.id}/>
          ))}
      </EventCards>
        }
    </Content>
    </Container>
  );
};

export default NextEvents;

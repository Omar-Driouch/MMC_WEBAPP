import React, { useEffect } from 'react'
import Statistics from '../Statistics/Statistics'
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent'
import NextEvents from '../NextEvents/NextEvents'
import Partners from '../Partners/Partners'
import EventsSwipper from '../EventsSwipper/EventsSwipper'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents } from '../../features/eventSlice'
import Loader from '../Loader/Loader'
const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector(state=>state.event.events);
  const status = useSelector(state=>state.event.status);
  useEffect(()=>{
     dispatch(fetchEvents());
  },[dispatch])
  return (
    <>
    <EventsSwipper/>
      <Statistics/>
      <UpcomingEvent/>
      <NextEvents/>
      <Partners/>
    </>
  )
}

export default Home
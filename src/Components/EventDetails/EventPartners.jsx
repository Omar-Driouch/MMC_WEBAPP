import React, { useEffect } from 'react'
import styled from "styled-components"
import {useDispatch , useSelector} from "react-redux"
import EventPartner from './EventPartner';
import { fetchPartners } from '../../features/partnerSlice';
import Loader from '../Loader/Loader';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
const PartnersList = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:35px;
  margin-top:16px;
`;
const EventPartnersContainer = styled.div`
 margin:50px 0;
`
const EventPartnersTitle = styled.div`
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
const EventPartners = ({eventPartners , status , error}) => {
  const dispatch = useDispatch();
  // const partners = useSelector(state=>state.partner.partners);
  // const status = useSelector(state=>state.partner.status);
  // const error = useSelector(state=>state.partner.error);
  useEffect(()=>{
    dispatch(fetchPartners());
  },[dispatch])
  return (
    <EventPartnersContainer>
       <EventPartnersTitle>
        Partners
       </EventPartnersTitle>
      {(status === "failed" && error !== null) && <ErrorAlert error={error}/>}
       {status === "loading" &&
       <PartnersList>
        <Loader/>
       </PartnersList>
       }
       {/* {status === "succeded" && */}
       {status === "succeded" && 
       <PartnersList>
        {eventPartners?.map((partner)=>(
          <EventPartner partner={partner} key={partner?.id}/>
          ))}
       </PartnersList>
        }
        {/* } */}
    </EventPartnersContainer>
  )
}

export default EventPartners
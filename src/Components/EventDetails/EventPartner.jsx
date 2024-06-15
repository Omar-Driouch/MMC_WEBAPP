import React from 'react'
import styled from "styled-components"

const EventPartnerCard = styled.div`
  width:200px;
  padding:20px;
  height:200px;
  border:1px solid rgb(255,183,3);
`
const EventPartner = ({partner}) => {
  return (
    <EventPartnerCard>
        <img style={{width:"100%",height:"100%"}} src={partner?.logo} alt="" />
    </EventPartnerCard>
  )
}

export default EventPartner
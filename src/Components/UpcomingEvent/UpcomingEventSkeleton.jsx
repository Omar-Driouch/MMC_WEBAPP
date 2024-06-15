import { Skeleton } from 'primereact/skeleton';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
const UpcomminEventCard = styled.div`
// border:1px solid #f1f1f1;
margin-top:40px;
width:100%;
display:flex;
gap:40px;
@media (max-width:992px){
    flex-direction:column;
}
`;

const Box = styled(Skeleton)`
min-height:600px;
flex:1;
border-radius:0;
@media (max-width:992px){
    min-height:300px;
}
 `;
 // const Image = styled.img`
 //    width:100%;
 //    height:100%;
// `;

const Details = styled.div`
flex:1;
display:flex;
min-height:600px;
border-radius:0;
flex-direction:column;
justify-content:center;
 align-items:flex-start;
 gap:32px;
 @media (max-width:992px){
     min-height:300px;
     padding:20px;
}
`;

const EventTitle = styled(Skeleton)`
     font-size:25px;
     min-height:30px;
border-radius:0;
     font-weight:500;
     @media (max-width:768px){
      font-size:20px;
    }
`;
const EventDescription = styled(Skeleton)`
 min-height:60px;
 border-radius:0;
 @media (max-width:768px){
     font-size:14px;
    }
    `
    const TimerBox = styled.div`
    display:flex;
    width:100%;
    gap:20px; 
    `;
    
    const Item = styled(Skeleton)`
    display:flex;
    flex-direction:column;
    gap:8px;
    align-items:center;
border-radius:0;
    justify-content:center;
    min-height:50px;
    width:100px;
    @media (max-width:768px){
        min-height:50px;
  width:80px;
}
 @media (max-width:576px){
  height:40px;
  width:40px;
}
`;
const Span = styled(Skeleton)`
  font-size:18px;
  text-transform:capitalize;
border-radius:0;
  @media (max-width:768px){
    font-size:12px;
  }
`
const TimeLeft = styled(Span)`
 font-size:30px;
 @media (max-width:768px){
  font-size:20px;
}
`;
const ReadMoreBtn = styled(Skeleton)`
position:relative;
overflow:hidden;
border-radius:0;

width:120px;
min-height:60px;
`;
const UpcomingEventSkeleton = () => {
  return (
    <UpcomminEventCard>
      <Box>
      </Box>
            <Details>
                <EventTitle/>
                <EventDescription/>
                <TimerBox>
                  <Item>
                    <Span/>
                    <TimeLeft/>
                  </Item>
                  <Item>
                    <Span/>
                    <TimeLeft/>
                  </Item>
                  <Item>
                    <Span/>
                    <TimeLeft/>
                  </Item>
                  <Item>
                    <Span/>
                    <TimeLeft/>
                  </Item>
                </TimerBox>
                <ReadMoreBtn/>
            </Details>
    </UpcomminEventCard>
  )
}

export default UpcomingEventSkeleton
import React, { useEffect } from 'react'
import Heading from '../StyledComponents/Heading'
import styled from "styled-components";
import {useSelector  , useDispatch} from "react-redux"
import { fetchPartners } from '../../features/partnerSlice';
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import Loader from '../Loader/Loader';
// import Slider from "react-slick";
const Container = styled.div`
@media (max-width:1250px){
  padding:0 30px;
}
`;
const Content = styled.div`
  max-width:1200px;
  // min-height:100vh;
  margin:0 auto;
  padding:50px 0;
`;
const PartnersList = styled.div`
 margin-top:40px;
 display:flex;
 gap:60px;
 flex-wrap:wrap;
`
const PartnerCard = styled.article`
   width:170px;
   height:170px;
   display:flex;
   justify-content:center;
   align-items:center;
   padding:12px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;  //  border:1px solid rgba(255,183,3);
   transition:0.3s ease;
   &:hover{
    transform:translateY(-20px);
   }
`
const Image = styled.img`
   width:100%;
   height:100%;
   object-fit:contain;
`
const Partners = () => {
  // var settings = {
  //   infinite: true,
  //   speed: 2000,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  const dispatch = useDispatch();
  const partners = useSelector(state=>state.partner.partners);
  const status = useSelector(state=>state.partner.status);
  const error = useSelector(state=>state.partner.error);
  useEffect(()=>{
      dispatch(fetchPartners());
  },[dispatch])
  return (
    <Container>
     <Content>
      <Heading name="Our Partners"/>
      {status === "failed" && <ErrorAlert error={error}/>}
      {status === "loading" && <Loader/>}
      {status === "succeded" &&
      <PartnersList>
       {/* <Slider {...settings}> */}
        {partners.map((partner)=>(
          <PartnerCard key={partner.id}>
          <Image src={partner?.logo}/>
         </PartnerCard>
           ))}
       {/* </Slider> */}
       </PartnersList>
          }
     </Content>
    </Container>
  )
}

export default Partners
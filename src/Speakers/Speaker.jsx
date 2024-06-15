import React from 'react'
import styled from "styled-components";
import img from "../assets/said_wahid.png"
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
const SpeakerCard = styled.article`
 width:350px;
//  height:450px;
 box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
 display:flex;
 flex-direction:column;
 align-items:center;
 overflow:hidden;
 position:relative;
 gap:30px;
//  &:hover:before{
//      height:20%;
//   }
//  &:before{
//    transition:0.5s ease;
//    position:absolute;
//    z-index:2;
//    content:"";
//    width:100%;
//    height:0;
//    background:rgba(255,255,255,0.05);
//    backdrop-filter:blur(20px);
//  }
`;

const ImageBox = styled(Link)`
  width:220px;
  height:220px;
  display:flex;
  margin:20px 0;
  justify-content:center;
  align-items:center;
  background:#FFB703;
  border-radius:50%;
  overflow:hidden;
  box-shadow: rgb(255, 183, 3) 0px 20px 30px -10px;
  
`
const Image = styled.img`
  width:180px;
  height:100%;
  border-radius:50%;
  object-fit:cover;
  transform:translateY(10px);
`
const SpeakerName = styled.h1`
  font-size:18px;
  font-weight:500;
  color:#333;
  text-transform:capitalize;
`;

const SpeakerSpeciality = styled.h2`
  display:inline-block;
  color:#FFB703;
  font-weight:300;
  text-transform:capitalize;
  text-align:center;
`;

const SpeakerBiography = styled.p`
 color:#999;
 font-size:14px;
 text-align:center;
 padding:0 20px;
`
const SpeakerMediaBox = styled.div`
 display:flex;
 gap:20px;
 ${SpeakerCard}:hover &{
  margin-bottom:0;
 }
`
const SpeakerMedia = styled.a`
  color:#FFB703;
  display:flex;
  width:40px;
  height:40px;
  justify-content:center;
  cursor:pointer;
  transition:0.3s ease;
  align-items:center;
  border:1px solid #FFB703;
  border-radius:50%;
  &:hover{
    background:#ffb703;
    color:#fff;
  }
`
const ReadMoreBtn = styled(Link)`
  // position:absolute;
  // padding:10px 20px;
  background:#FFB703;
  color:#fff;
  text-transform:uppercase;
  z-index:50;
  transform:translateX(-400px);
  transition:0.3s ease;
  ${SpeakerCard}:hover &{
    padding:10px 20px;
    margin-bottom:30px;
    // display:block;
    transform:translateY(0);
  }
`;

const BtnEffect = styled.div`
position:absolute;
inset:0;
height:100%;
width:100%;
transform:scale(0);
transition:0.3s linear;
${ReadMoreBtn}:hover &{
 transform:scale(1);
 background:#ffffff34;
}
`
const Speaker = ({speaker}) => {
  return (
    <SpeakerCard data-aos="zoom-in" data-aos-duration="1000">
     <ImageBox to={`/speakers/${speaker?.id}`}>
        <Image src={speaker?.picturePath}/>
     </ImageBox>
     <SpeakerName>{speaker?.firstname || "said"} {speaker?.lastname || "wahid"}</SpeakerName>
     <SpeakerSpeciality>{speaker?.bio || ".net consultant"}</SpeakerSpeciality>
     {/* <SpeakerBiography>
        {speaker?.description}
     </SpeakerBiography> */}
     <SpeakerMediaBox>
        <SpeakerMedia href={`https://www.${speaker?.speakerSocialMedia?.facebook}`}><FacebookIcon/></SpeakerMedia>
        <SpeakerMedia><InstagramIcon/></SpeakerMedia>
        <SpeakerMedia><XIcon/></SpeakerMedia>
        <SpeakerMedia><LinkedInIcon/></SpeakerMedia>
     </SpeakerMediaBox>
     <ReadMoreBtn to={`/speakers/${speaker?.id}`}><BtnEffect/> read more <EastIcon/></ReadMoreBtn>
    </SpeakerCard>
  )
}

export default Speaker
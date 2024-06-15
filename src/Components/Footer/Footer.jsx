import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import logo from "../../assets/logo2.png";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import FooterImage from "../../assets/footerImg.svg"
const FooterContainer = styled.div`
  background:#1A0E22;
  // background-repeat:no-repeat;
  // background-position:center;
  padding:3rem 0;
  // background-size: cover;
  // border-top:1px solid #f1f1f1;
  // display:flex;
  // flex-direction:column;
  // gap:30px;
  // justify-content:center;
  // align-items:start;
  // @media (max-width:576px){
  // height:950px;
  // }
`
const Content = styled.div`
  max-width:1200px;
  margin:0 auto;
  border-bottom:1px solid #fff;
  padding:20px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  @media (max-width:576px){
    gap:100px;
    justify-content:center;
  }
`
const Box = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
`
const Image = styled.img`
  width:350px;
`
const HeadTitle = styled.h3`
  text-transform:capitalize;
  font-size:20px;
  font-weight:600;
  color:#fff;
`
const Menu = styled.ul`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
`;
const MenuLink = styled(Link)`
color:#fff;
text-decoration:none;
font-weight:300;
text-transform:capitalize;
transition:0.3s ease;
&:hover{
  color:#333;
  text-decoration:underline;
}
`
const SocialMedia = styled.ul`
   display:flex;
   flex-direction:column;
   gap:10px;
  //  padding:0 20px;
`
const MediaItem = styled(Link)`
  width:30px;
  height:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
  transition:0.3s ease;
  &:hover{
    color:#333;
  }
`;
const CopyRight = styled.p`
 text-align:center;
 color:#fff;
 padding:15px 0;
`
const Footer = () => {
  const pages = ['home','programs','events','speakers','contact']
  return (
    <FooterContainer>
      <Content>
        <Box>
         <Image src={logo}/>
        </Box>
        <Box>
          <HeadTitle>pages</HeadTitle>
        <Menu>
          {pages.map((page,index)=>(
            <MenuLink key={index}>{page}</MenuLink>
            ))}
         </Menu>
        </Box>
        <Box>
          <HeadTitle>Follow Us</HeadTitle>
          <SocialMedia>
            <MediaItem><FacebookIcon style={{width:"100%",height:"100%"}}/></MediaItem>
            <MediaItem><InstagramIcon style={{width:"100%",height:"100%"}}/></MediaItem>
            <MediaItem><LinkedInIcon style={{width:"100%",height:"100%"}}/></MediaItem>
            <MediaItem><XIcon style={{width:"100%",height:"100%"}}/></MediaItem>
         </SocialMedia>
        </Box>
      </Content>
      <CopyRight>Copyright © 2024 JOBINTECH COHORTE 1</CopyRight>
    </FooterContainer>
  )
}

export default Footer
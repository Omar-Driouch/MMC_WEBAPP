import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { contacts } from '../../Data/contact';
import { FaFacebookF,FaXTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa6";
import "./Contact.css";
import styled from "styled-components";

const ContactHeading = styled.div`
 width:100%;
 height:350px;
 display:flex;
 position:relative;
 top:90px;
 left:0;
 align-items:center;
 justify-content:center;
 background-image: linear-gradient(45deg, transparent 0%, transparent 51%,rgba(130, 130, 130,0.05) 51%, rgba(130, 130, 130,0.05) 71%,transparent 71%, transparent 100%),linear-gradient(0deg, transparent 0%, transparent 69%,rgba(130, 130, 130,0.05) 69%, rgba(130, 130, 130,0.05) 84%,transparent 84%, transparent 100%),linear-gradient(135deg, transparent 0%, transparent 37%,rgba(130, 130, 130,0.05) 37%, rgba(130, 130, 130,0.05) 73%,transparent 73%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
 `
 const Box = styled.div`
 width:1200px;
 display:flex;
 justify-content:center;
 margin:0 auto;
`
const HeadingTitle = styled.h1`
    font-size:60px;
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
export const Contact = () => {
  return (
    <div>
    <ContactHeading>
            <Box>
              {/* <HeadingTitle><FormatQuoteIcon style={{fontSize:"30px"}}/> Programs <FormatQuoteIcon style={{fontSize:"30px"}}/></HeadingTitle> */}
              <HeadingTitle>
              <span>Contact</span>
              </HeadingTitle>
            </Box>
    </ContactHeading>
    <div className='ContactPage py-[200px]'>
        <div className="contactHeader">
        </div>
        <div className="contactInfo">
            <div className="contactInfoCards">
                <div className="contactInfoCardsLogoDiv">
                    <FaPhone className='contactInfoCardsLogo'/>
                </div>
                <div className="contactInfoCardsDetails">
                    <div className='contactInfoCardsDetailsTitle'>
                        Phone / Fax
                    </div>
                    <p className='contactInfoCardsDetailsContent'>
                        {contacts[0].mobile1} <br />
                        {contacts[0].mobile2}
                    </p>
                </div>
            </div>
            <div className="contactInfoCards">
                <div className="contactInfoCardsLogoDiv">
                    <IoMdMail className='contactInfoCardsLogo'/>
                </div>
                <div className="contactInfoCardsDetails">
                    <div className='contactInfoCardsDetailsTitle'>
                        E-mail
                    </div>
                    <p className='contactInfoCardsDetailsContent'  dangerouslySetInnerHTML={{ __html: contacts[0].mail}} />
                                       
                </div>
            </div>
            <div className="contactInfoCards">
                <div className="contactInfoCardsLogoDiv">
                    <FaLocationDot className='contactInfoCardsLogo'/>
                </div>
                <div className="contactInfoCardsDetails">
                    <div className='contactInfoCardsDetailsTitle'>
                        Location
                    </div>
                    <p className='contactInfoCardsDetailsContent'>
                        {contacts[0].location}
                    </p>
                </div>
            </div>
        </div>
        <div className="contactFormAndSocial">
            <div className="contactSocial">
                <div className="contactInfoCardsDetailsTitle">
                Leave Your Message
                </div>
                <div className="contactInfoCardsDetailsContent">
                    If you have any questions about the services <br />
                    we provide simply use the form below. We try <br />
                    and respond to all queries and comments <br /> 
                    within 24 hours.
                </div>
                <div className="contactInfoCardsDetailsTitle">
                Stay Connected
                </div>
                <div className="contactInfoCardsDetailsContent">
                    <a href={'https://www.facebook.com/'+contacts[0].facebook} className='contentSocialLink'>
                        <div className="contentSocialBorder">
                            <FaFacebookF className='contentSocial'/>
                        </div> 
                        <div className="contentSocialName">
                            Facebook
                        </div>
                    </a>
                    <a href={'https://www.x.com/'+contacts[0].twitter} className='contentSocialLink'>
                        <div className="contentSocialBorder">
                            <FaXTwitter className='contentSocial'/>
                        </div> 
                        <div className="contentSocialName">
                            Twitter
                        </div>
                    </a>
                    <a href={'https://www.instagram.com/'+contacts[0].instagram} className='contentSocialLink'>
                        <div className="contentSocialBorder">
                            <FaInstagram className='contentSocial'/>
                        </div> 
                        <div className="contentSocialName">
                            Instagram
                        </div>
                    </a>
                    <a href={'https://www.linkedin.com/in/'+contacts[0].linkedin} className='contentSocialLink'>
                        <div className="contentSocialBorder">
                            <FaLinkedinIn className='contentSocial'/>
                        </div> 
                        <div className="contentSocialName">
                            Linkedin
                        </div>
                    </a>
                </div>
            </div>
            <div className="contactForm">
                <div className="contactFormLineOne">
                    <div className="contactFormleft">
                        <label className='contactFormLable' htmlFor="">Name*</label><br />
                        <input type="text" className="ContactFormInput" />
                    </div>
                    <div className="contactFormRight">
                        <label className='contactFormLable' htmlFor="">Email*</label><br />
                        <input type="text" className="ContactFormInput" />
                    </div>
                </div>
                <div className="contactFormLine">
                    <label className='contactFormLable' htmlFor="">Phone Number*</label><br />
                    <input type="text" className="ContactFormInput" />
                </div>
                <div className="contactFormLine">
                    <label className='contactFormLable' htmlFor="">Message*</label><br />
                    <textarea  className="ContactFormInput" style={{resize:"none"}}/>
                </div>
                <button className="ContactFormSubmit">Send Message</button>
            </div>
        </div>
    </div>
    </div>
  )
}

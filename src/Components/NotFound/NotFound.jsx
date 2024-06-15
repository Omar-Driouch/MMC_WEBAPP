import React from 'react'
import styled from "styled-components";
import NotFoundImg from "../../assets/NotFoundImg.svg"
const NotFoundContainer = styled.div`
  min-height:100vh;
  padding:100px 0;
  display:flex;
  flex-direction:column;
  gap:30px;
  justify-content:center;
  align-items:center;
`
const NotFound = () => {
   
  return (
    <NotFoundContainer>
       <img src={NotFoundImg} width={600} alt="" />
    </NotFoundContainer>
  )
}

export default NotFound
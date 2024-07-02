import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ProgramCard = styled(Link)`
  width: 200px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Details = styled.div`
  // position:absolute;
  // overflow:hidden;
  // top:0;
  // left:0;
  width: 100%;
  height: 100%;
  display: block;
  // opacity:0;
  ${ProgramCard}:hover & {
    background: #333;
    // opacity:1;
    // height:100%;
  }
  transition: 0.3s ease;
  background: #ffffff4d;
  // backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  // gap:12px;
  background: #ffb703;
`;
const ProgramTitle = styled.h1`
  color: #fff;
  font-weight: 800;
  display: inline-block;
  text-transform: capitalize;
  // text-align:center;
  font-size: 25px;
  // padding:5px;
  // width:100%;
  // height:100%;
`;
const StartDate = styled.h3`
  font-size: 14px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const EndDate = styled.h3`
  margin: 0 auto;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ProgramBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 8px;
  border: 1px solid #ffb703;
  text-transform: capitalize;
  background: #ffb703;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  width: 130px;
  height: 40px;
  padding-left: 5px;
`;
const Program = ({ program }) => {
  return (
    <ProgramCard to={`${program.id}`}>
      {/* <Image src={img} alt="program-img"/> */}
      <Details>
        <ProgramTitle>{program?.title}</ProgramTitle>
      </Details>
      {/* <ProgramBtn to={`${program.id}`}>program events <EastIcon style={{fontSize:"16px"}}/></ProgramBtn> */}
    </ProgramCard>
  );
};

export default Program;

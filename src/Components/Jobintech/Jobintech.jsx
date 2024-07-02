import styled from "styled-components";
import jobintech_img from "../../assets/jobintechImage.png";
import { FaCode } from "react-icons/fa";
import { colors } from "../../theme";
import React from "react";

const { yellow, blue } = colors;

const JobintechContainer = styled.div`
  min-height: 100vh;
`;
const JobintechHeading = styled.div`
  width: 100%;
  min-height: 350px;
  position: relative;
  top: 90px;
  margin-bottom: 120px;
  left: 0;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      45deg,
      transparent 0%,
      transparent 51%,
      rgba(130, 130, 130, 0.05) 51%,
      rgba(130, 130, 130, 0.05) 71%,
      transparent 71%,
      transparent 100%
    ),
    linear-gradient(
      0deg,
      transparent 0%,
      transparent 69%,
      rgba(130, 130, 130, 0.05) 69%,
      rgba(130, 130, 130, 0.05) 84%,
      transparent 84%,
      transparent 100%
    ),
    linear-gradient(
      135deg,
      transparent 0%,
      transparent 37%,
      rgba(130, 130, 130, 0.05) 37%,
      rgba(130, 130, 130, 0.05) 73%,
      transparent 73%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));
`;
const Box = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const HeadingTitle = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: ${yellow};
  text-transform: capitalize;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  @media (max-width: 1150px) {
    font-size: 30px;
    gap: 40px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    gap: 20px;
  }
  @media (max-width: 576px) {
    gap: 20px;
    font-size: 14px;
  }
`;
const Jobintech = () => {
  return (
    <JobintechContainer>
      <JobintechHeading>
        <Box data-aos="fade-down" data-aos-duration="1000">
          <HeadingTitle>Jobintech</HeadingTitle>
        </Box>
      </JobintechHeading>
      <div className="max-w-[1200px] mx-auto min-h-screen flex items-center gap-5">
        <div className="left-box flex-1">
          <img src={jobintech_img} className="w-[580px]" alt="" />
        </div>
        <div className="right-box flex-1 flex flex-col gap-7">
          <h1 className="text-[40px] font-[700]">JOBINTECH PROGRAMME</h1>
          <p className="font-[400] text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            assumenda laborum quas quia, nemo, labore quis doloribus corporis,
            deleniti delectus totam accusantium sunt molestiae dolore autem fuga
            vitae debitis explicabo.
          </p>
          <div className="flex gap-5">
            <a
              href="https://jobintech.academy/candidature-jobintech/"
              style={{ background: `${yellow}` }}
              className="w-[160px] h-[50px] flex items-center justify-center font-[600] uppercase text-white"
            >
              register now
            </a>
            <a
              href="/#/contact"
              style={{ background: `${blue}` }}
              className="w-[160px] h-[50px] flex gap-2 items-center justify-center font-[600] uppercase text-white"
            >
              <FaCode /> Developpers
            </a>
          </div>
        </div>
      </div>
    </JobintechContainer>
  );
};

export default Jobintech;

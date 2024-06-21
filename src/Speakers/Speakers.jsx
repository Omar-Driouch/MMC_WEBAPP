import React, { useEffect } from "react";
import styled from "styled-components";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useDispatch, useSelector } from "react-redux";
import Speaker from "./Speaker";
import { fetchSpeakers } from "../features/speakerSlice";
import SpeakerSkeleton from "./SpeakerSkeleton";
import ErrorAlert from "../Components/ErrorAlert/ErrorAlert";
const SpeakersContainer = styled.div`
  min-height: 100vh;
`;
const SpeakersHeading = styled.div`
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
const Content = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 50px 0;
`;
const HeadingTitle = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #ffb703;
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
const SpeakersList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;
const Speakers = () => {
  const dispatch = useDispatch();
  const speakers = useSelector((state) => state.speaker.speakers);
  const status = useSelector((state) => state.speaker.status);
  const error = useSelector((state) => state.speaker.error);
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchSpeakers());
  }, [dispatch]);
  return (
    <SpeakersContainer>
      <SpeakersHeading>
        <Box>
          {/* <HeadingTitle><FormatQuoteIcon style={{fontSize:"30px"}}/> Speakers <FormatQuoteIcon style={{fontSize:"30px"}}/></HeadingTitle> */}
          <HeadingTitle>
            <span>Speakers</span>
          </HeadingTitle>
        </Box>
      </SpeakersHeading>
      <Content>
        {status === "failed" && error !== null && <ErrorAlert error={error} />}
        {status === "loading" && (
          <SpeakersList>
            <SpeakerSkeleton />
            <SpeakerSkeleton />
            <SpeakerSkeleton />
          </SpeakersList>
        )}
        {status === "succeded" && (
          <SpeakersList>
            {speakers.map((speaker) => (
              <Speaker speaker={speaker} />
            ))}
          </SpeakersList>
        )}
      </Content>
    </SpeakersContainer>
  );
};

export default Speakers;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchProgramById } from "../../features/programSlice";
import Event from "../NextEvents/Event";
import { fetchEvents } from "../../features/eventSlice";
import Pagination from "../Pagination/Pagination";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EventsSkeletonLoader from "../Events/EventsSkeletonLoader";
const ProgramEventsContainer = styled.div`
  padding: 50px 0;
`;
const ProgramEventsHeading = styled.div`
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
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const HeadingTitle = styled.h1`
  font-size: 50px;
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

const Content = styled.div`
  width: 1200px;
  margin: 100px auto;
`;
const Path = styled.div`
  color: #aaabbb;
  display: flex;
  gap: 30px;
  text-transform: capitalize;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Span = styled.span`
  position: relative;
  &:not(:last-child):before {
    position: absolute;
    content: "";
    background: transparent;
    width: 8px;
    height: 8px;
    border-top: 3px solid #aaabbb;
    border-right: 3px solid #aaabbb;
    transform: rotate(45deg) translateY(-50%);
    top: 50%;
    right: -15px;
  }
`;
const ProgramEventsList = styled.div`
  display: flex;
  gap: 52px;
  flex-wrap: wrap;
  margin-top: 40px;
`;
const PaginationBox = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProgramEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(8);
  const { id } = useParams();
  const dispatch = useDispatch();
  const program = useSelector((state) => state.program.program);
  const programEvents = useSelector((state) => state.event.events)?.filter(
    (e) => e.programId === id
  );
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchProgramById(id));
    dispatch(fetchEvents());
  }, [dispatch, id, currentPage]);
  const lastEventIndex = currentPage * eventsPerPage;
  const firstEventIndex = lastEventIndex - eventsPerPage;
  const currentEvents = programEvents.slice(firstEventIndex, lastEventIndex);
  return (
    <ProgramEventsContainer>
      <ProgramEventsHeading>
        <Box>
          <HeadingTitle>
            <span>Programs</span>
          </HeadingTitle>
          <Path>
            <Span>
              <Link to="/">Home</Link>
            </Span>
            <Span>
              <Link to="/programs">Programs</Link>
            </Span>
            <Span>{program?.title}</Span>
          </Path>
        </Box>
      </ProgramEventsHeading>
      <Content>
        {currentEvents?.length === 0 ? (
          <ProgramEventsList>
            <EventsSkeletonLoader />
            <EventsSkeletonLoader />
            <EventsSkeletonLoader />
          </ProgramEventsList>
        ) : (
          <>
            <ProgramEventsList>
              {currentEvents?.map((event) => (
                <Event event={event} key={event?.id} />
              ))}
            </ProgramEventsList>
            <PaginationBox>
              <Pagination
                totalEvents={programEvents.length}
                eventsPerPage={eventsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </PaginationBox>
          </>
        )}
      </Content>
    </ProgramEventsContainer>
  );
};

export default ProgramEvents;

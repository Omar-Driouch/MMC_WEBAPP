import React, { useEffect, useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Event from "../NextEvents/Event";
import { useNavigate } from "react-router-dom";
import { fetchEvents } from "../../features/eventSlice";
import EventsSkeletonLoader from "./EventsSkeletonLoader";
import { Skeleton } from "primereact/skeleton";
import Pagination from "../Pagination/Pagination";
import Filter from "../FilterSideBar/FilterSideBar.";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
const EventsContainer = styled.div`
  min-height: 100vh;
`;
const EventHeading = styled.div`
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

const FilterBtn = styled.button`
  border: 1px solid #ffb703;
  color: #ffb703;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
`;
const EventCards = styled.div`
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
const Events = () => {
  const [sort, setSort] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(8);
  const [selectedCity, setSelectedCity] = useState(null);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const eventsList = useSelector((state) =>
    selectedCity ? state.event.filtredEvents : state.event.events
  );
  const status = useSelector((state) => state.event.status);
  const error = useSelector((state) => state.event.error);
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchEvents());
  }, [dispatch, currentPage]);
  const lastEventIndex = currentPage * eventsPerPage;
  const firstEventIndex = lastEventIndex - eventsPerPage;
  const currentEvents = eventsList?.slice(firstEventIndex, lastEventIndex);

  const handleSetCity = (city) => {
    setSelectedCity(city);
  };
  //  const handleChange = (e)=>{
  //   // setSort(e.target.value);
  //   if(e.target.value === "1"){
  //     dispatch(sortEvents({type:e.target.value}));
  //   }else{
  //     dispatch(fetchEvents());
  //   }
  //  }

  return (
    <React.Fragment>
      <EventsContainer>
        <EventHeading>
          <Box>
            {/* <HeadingTitle><FormatQuoteIcon style={{fontSize:"30px"}}/> Events <FormatQuoteIcon style={{fontSize:"30px"}}/></HeadingTitle> */}
            <HeadingTitle>
              <span>Events</span>
            </HeadingTitle>
          </Box>
        </EventHeading>
        <Content>
          {status === "failed" && error !== null && (
            <ErrorAlert error={error} />
          )}
          {status === "loading" && (
            <div>
              <Skeleton borderRadius="0" width="110px" height="40px"></Skeleton>
            </div>
          )}
          {status === "succeded" && (
            <div className="flex justify-between items-center">
              <Filter handleSetCity={handleSetCity} />
              {/* <select onChange={handleChange} name="" id="" className='border-[1px] border-slate-400 px-3 py-1'>
            <option value="0">sort by :</option>
            <option value="1">Title</option>
            <option value="2">City</option>
          </select> */}
            </div>
          )}
          {status === "loading" && (
            <EventCards>
              <EventsSkeletonLoader />
              <EventsSkeletonLoader />
              <EventsSkeletonLoader />
            </EventCards>
          )}
          {status === "succeded" && (
            <>
              <EventCards>
                {currentEvents?.map((e) => (
                  <Event event={e} key={e.id} />
                ))}
              </EventCards>
              <PaginationBox>
                <Pagination
                  totalEvents={eventsList?.length}
                  eventsPerPage={eventsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </PaginationBox>
            </>
          )}
        </Content>
      </EventsContainer>
    </React.Fragment>
  );
};

export default Events;

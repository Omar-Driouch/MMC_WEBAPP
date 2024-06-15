import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../features/eventSlice";
import Event from "../NextEvents/Event";
const SearchContainer = styled.div`
  padding: 100px 0;
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding: 25px;
`;
const EventCards = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const Path = styled.div`
  color: #aaabbb;
  display: flex;
  gap: 30px;
  text-transform: capitalize;
  font-weight: 300;
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
// const Alert = styled.div`
//   width: 600px;
//   height: 60px;
//   margin: 30px auto;
//   color: #333;
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   align-items: center;
//   font-size: 20px;
//   text-transform: uppercase;
//   font-weight: 500;
// `;
const SearchEvent = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const searchedEvents = useSelector((state) => state.event.events)?.filter(
    (e) => e?.title.toUpperCase().includes(query.toUpperCase())
  );
  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchEvents());
  }, [dispatch, query]);
  return (
    <SearchContainer>
      <Content>
        {searchedEvents?.length === 0 ? (
          <Stack sx={{ width: "100%",height:"60vh"}} spacing={2}>
            <Alert severity="warning">
              Oops! No results found for this query!
            </Alert>
          </Stack>
        ) : (
          <>
            <Path>
              <Span>
                <Link to="/">Home</Link>
              </Span>
              <Span>{query}</Span>
            </Path>
            <EventCards>
              {searchedEvents.map((event) => (
                <Event event={event} key={event?.id} />
              ))}
            </EventCards>
          </>
        )}
      </Content>
    </SearchContainer>
  );
};

export default SearchEvent;

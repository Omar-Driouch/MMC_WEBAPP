import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../API/BaseUrl";
export const fetchLatestEvents = createAsyncThunk(
  "event/fetchLatestEvents",
  async () => {
    const response = await axios.get(`${BASE_URL}/Event`);
    return response?.data;
  }
);
export const fetchEvents = createAsyncThunk("event/fetchEvents", async () => {
  // const response = await axios.get("https://retoolapi.dev/0QfQLg/events");
  const response = await axios.get(`${BASE_URL}/Event`);
  return response.data;
});
export const fetchEventById = createAsyncThunk(
  "event/fetchEventById",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/Event/${id}`);
    // const response = await axios.get(
    //   `https://retoolapi.dev/0QfQLg/events/${id}`
    // );
    return response?.data;
  }
);
export const fetchEventSessions = createAsyncThunk(
  "event/fetchEventSessions",
  async (eventId) => {
    const response = await axios.get(
      `${BASE_URL}/Session/GetSessionByEventId/${eventId}`
    );
    return response.data;
  }
);
export const fetchEventPartners = createAsyncThunk(
  "event/fetchEventPartners",
  async (eventId) => {
    const response = await axios.get(`${BASE_URL}/EventPartner/${eventId}`);
    return response.data;
  }
);

export const fetchEventSpeakers = createAsyncThunk(
  "event/fetchEventSpeakers",
  async (eventId) => {
    const response = await axios.get(
      `${BASE_URL}/EventSpeakers/AllSpeakersByEvent/${eventId}`
    );
    return response.data;
  }
);

const initialState = {
  latestEvents: [],
  events: [],
  filtredEvents:[],
  status: "idle",
  event: [],
  error: null,

  eventSessions: [],
  eventSessionsStatus: "idle",
  eventSessionsError: null,

  eventPartners: [],
  eventPartnersStatus: "idle",
  eventPartnersError: null,

  eventSpeakers: [],
  eventSpeakersStatus: "idle",
  eventSpeakersError: null,
  upcomingEvent: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getUpEvent: (state) => {
      const currentDate = new Date();
      const filtered = state.events?.filter((event) => {
        const eventDate = new Date(event?.startDate);
        return eventDate > currentDate;
      });
      state.upcomingEvent = filtered?.sort((a,b)=>{
        return a.startDate - b.startDate
      })
    },
    filterByCity:(state,action)=>{
      state.filtredEvents = state.events.filter((ev)=>ev.cityId === action.payload);
    }

  // sortEvents:(state,action)=>{
  //   state.events = state.events.sort((a,b)=>{
  //     if(action.payload.type === "1"){
  //       const titleA = a.title.toLowerCase();
  //       const titleB = b.title.toLowerCase();
  //       if (titleA < titleB) return -1;
  //       if (titleA > titleB) return 1;
  //       return 0;
  //     }
  //   })
  // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLatestEvents.fulfilled, (state, action) => {
        state.status = "succeded";
        state.latestEvents = action.payload;
      })
      .addCase(fetchLatestEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeded";
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEventById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.status = "succeded";
        state.event = action.payload;
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEventSessions.pending, (state) => {
        state.eventSessionsStatus = "loading";
      })
      .addCase(fetchEventSessions.fulfilled, (state, action) => {
        state.eventSessionsStatus = "succeded";
        state.eventSessions = action.payload;
      })
      .addCase(fetchEventSessions.rejected, (state, action) => {
        state.eventSessionsStatus = "failed";
        state.eventSessionsError = action.error.message;
      })
      .addCase(fetchEventPartners.pending, (state) => {
        state.eventPartnersStatus = "loading";
      })
      .addCase(fetchEventPartners.fulfilled, (state, action) => {
        state.eventPartnersStatus = "succeded";
        state.eventPartners = action.payload;
      })
      .addCase(fetchEventPartners.rejected, (state, action) => {
        state.eventPartnersStatus = "failed";
        state.eventPartnersError = action.error.message;
      })

      .addCase(fetchEventSpeakers.pending, (state) => {
        state.eventSpeakersStatus = "loading";
      })
      .addCase(fetchEventSpeakers.fulfilled, (state, action) => {
        state.eventSpeakersStatus = "succeded";
        state.eventSpeakers = action.payload;
      })
      .addCase(fetchEventSpeakers.rejected, (state, action) => {
        state.eventSpeakersStatus = "failed";
        state.eventSpeakersError = action.error.message;
      });
  },
});

export const { getUpEvent , filterByCity} = eventSlice.actions;

export default eventSlice.reducer;

import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
import { BASE_URL } from "../API/BaseUrl";
export const fetchSpeakers = createAsyncThunk("speaker/fetchSpeakers",async()=>{
        const response = await axios.get(`${BASE_URL}/Speaker`);
        return response?.data
})
export const fetchSpeakerById = createAsyncThunk("speaker/fetchSpeakerById",async(id)=>{
        const response = await axios.get(`${BASE_URL}/Speaker/${id}`);
        return response?.data
})

export const fetchSpeakerEvents = createAsyncThunk("speaker/fetchSpeakerEvents",async(speakerId)=>{
    const response = await axios.get(`${BASE_URL}/EventSpeakers/AllEventsBySpeaker/${speakerId}`);
    return response.data;
})

const initialState = {
    speakers:[],
    speaker:[],
    status:"idle",
    error:null,
    speakerEvents:[],
    speakerEventsStatus:"idle",
    speakerEventsError:null
};
const speakerSlice = createSlice({
    name:"speaker",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSpeakers.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchSpeakers.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.speakers = action.payload;
        })
        .addCase(fetchSpeakers.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchSpeakerById.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchSpeakerById.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.speaker = action.payload;
        })
        .addCase(fetchSpeakerById.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchSpeakerEvents.pending , (state)=>{
            state.speakerEventsStatus = "loading";
        })
        .addCase(fetchSpeakerEvents.fulfilled , (state,action)=>{
            state.speakerEventsStatus = "succeded";
            state.speakerEvents = action.payload;
        })
        .addCase(fetchSpeakerEvents.rejected , (state,action)=>{
            state.speakerEventsStatus = "failed";
            state.speakerEventsError = action.error.message;
        })
    }
})

export default speakerSlice.reducer;
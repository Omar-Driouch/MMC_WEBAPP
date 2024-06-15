import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
import { BASE_URL } from "../API/BaseUrl";
export const fetchCities = createAsyncThunk("city/fetchCities",async()=>{
    // try {
        const response = await axios.get(`${BASE_URL}/City`);
        return response.data
    // } catch (error) {
    //     console.log(error);
    // }
});
export const fetchCityById = createAsyncThunk("city/fetchCityById",async(id)=>{
    // try {
        const response = await axios.get(`${BASE_URL}/City/${id}`);
        return response.data;
    // } catch (error) {
    //     console.log(error);
    // }
})

export const addParticipant = createAsyncThunk("city/addParticipant",async(participant)=>{
    const response = await axios.post(`${BASE_URL}/Participant`,participant);
    return response.data?.id;
}) 
export const addEventParticipant = createAsyncThunk("city/addEventParticipant",async(eventParticipant)=>{
    const response = await axios.post(`${BASE_URL}/EventParticipant`,eventParticipant);
    console.log(response?.data);
    return response.data;
}) 
const initialState = {
    cities:[],
    city:[],
    participantId:null,
    status:"idle",
    error:null
};

const citySlice = createSlice({
    name:"city",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCities.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchCities.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.cities = action.payload;
        })
        .addCase(fetchCities.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchCityById.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchCityById.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.city = action.payload;
        })
        .addCase(fetchCityById.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(addParticipant.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(addParticipant.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.participantId = action.payload;
        })
        .addCase(addParticipant.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export default citySlice.reducer;








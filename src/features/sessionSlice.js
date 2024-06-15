import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
import { BASE_URL } from "../API/BaseUrl";
export const fetchSessions = createAsyncThunk("session/fetchSessions" , async()=>{
        const response = await axios.get(`${BASE_URL}/Session`);
        return response.data;
})
export const fetchSessionById = createAsyncThunk("session/fetchSessionById" , async(id)=>{
        const response = await axios.get(`${BASE_URL}/Session/${id}`);
        return response.data;
})


const initialState = {
    sessions:[],
    session:[],
    status:"idle",
    error:null
};

const sessionSlice = createSlice({
    name:"session",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSessions.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(fetchSessions.fulfilled,(state,action)=>{
            state.status = "succeded";
            state.sessions = action.payload;
        })
        .addCase(fetchSessions.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchSessionById.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(fetchSessionById.fulfilled,(state,action)=>{
            state.status = "succeded";
            state.session = action.payload;
        })
        .addCase(fetchSessionById.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        
    }
})


export default sessionSlice.reducer;
import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios"
import { BASE_URL } from "../API/BaseUrl";
export const fetchPrograms = createAsyncThunk("program/fetchPrograms",async()=>{
    const response = await axios.get(`${BASE_URL}/Program`);
    return response.data;
})
export const fetchProgramById = createAsyncThunk("program/fetchProgramById",async(id)=>{
    const response = await axios.get(`${BASE_URL}/Program/${id}`);
    return response.data;
})

const initialState = {
    programs:[],
    program:[],
    status:"idle",
    error:null
}

const programSlice = createSlice({
    name:"program",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPrograms.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchPrograms.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.programs = action.payload;
        })
        .addCase(fetchPrograms.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchProgramById.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchProgramById.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.program = action.payload;
        })
        .addCase(fetchProgramById.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})


export default programSlice.reducer;
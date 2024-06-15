import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_URL } from "../API/BaseUrl";
export const fetchThemes = createAsyncThunk("theme/fetchThemes",async ()=>{
    const response = await axios.get(`${BASE_URL}/Theme`);
    return response?.data;
})
export const fetchThemeById = createAsyncThunk("city/fetchThemeById",async(id)=>{
        const response = await axios.get(`${BASE_URL}/Theme/${id}`);
        return response.data;
})

const initialState = {
    themes:[],
    theme:[],
    status:"idle",
    error:null
};

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchThemes.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchThemes.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.themes = action.payload;
        })
        .addCase(fetchThemes.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchThemeById.pending , (state)=>{
            state.status = "loading";
        })
        .addCase(fetchThemeById.fulfilled , (state,action)=>{
            state.status = "succeded";
            state.theme = action.payload;
        })
        .addCase(fetchThemeById.rejected , (state,action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export default themeSlice.reducer;

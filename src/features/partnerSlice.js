import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../API/BaseUrl";
export const fetchPartners = createAsyncThunk(
  "partner/fetchPartner",
  async () => {
    const response = await axios.get(`${BASE_URL}/Partner`);
    return response?.data;
  }
);
const initialState = {
  partners: [],
  status: "idle",
  error: null,
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartners.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPartners.fulfilled, (state, action) => {
        state.status = "succeded";
        state.partners = action.payload;
      })
      .addCase(fetchPartners.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default partnerSlice.reducer;

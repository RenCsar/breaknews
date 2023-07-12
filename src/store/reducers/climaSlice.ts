import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/climaApi";

const key = process.env.REACT_APP_WEATHER_KEY;

export const fetchClima = createAsyncThunk('clima/fetchClima', async () => {
    const response = await API.get(`&key=${key}`);
    return response.data.results;
});

const initialState = {
    data: null,
    loading: false,
    error: ''
}

export const climaSlice = createSlice({
    name: 'clima',
    initialState: initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchClima.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(fetchClima.fulfilled, (state: any, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchClima.rejected, (state: any, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});
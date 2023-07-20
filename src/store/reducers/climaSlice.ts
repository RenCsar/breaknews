import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/watherFinanceApi";
import { ClimaState, TWeatherData } from "../../utils/types";

const key = process.env.REACT_APP_WEATHER_KEY;

export const fetchClima = createAsyncThunk<TWeatherData, void>('clima/fetchClima', async () => {
    const response = await API.get(`/weather?user_ip=remote&format=json-cors&key=${key}`);
    return response.data.results;
});

const initialState: ClimaState = {
    data: null,
    loading: false,
    error: ''
};

export const climaSlice = createSlice({
    name: 'clima',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClima.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchClima.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchClima.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});
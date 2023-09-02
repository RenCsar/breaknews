import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/watherFinanceApi";
import { ClimaState, TWeatherData } from "../../utils/types";

const key = process.env.REACT_APP_WEATHER_KEY;

export const fetchClima = createAsyncThunk<TWeatherData, void>('clima/fetchClima', async () => {
    if ("geolocation" in navigator) {
        try {
            const position = await new Promise<any>((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const response = await API.get(`/weather?lat=${latitude}&lon=${longitude}&format=json-cors&key=${key}`);
            return response.data.results;
        } catch (error) {
            console.error('Erro ao obter a posição do usuário: ', error);
            const response = await API.get(`/weather?format=json-cors&woeid=455827`);
            return response.data.results;
        }
    } else {
        // const response = await API.get(`/weather?user_ip=remote&format=json-cors&key=${key}`);
        const response = await API.get(`/weather?format=json-cors&woeid=455827`);
        return response.data.results;
    }
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
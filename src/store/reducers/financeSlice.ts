import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/financeApi";

const key = process.env.REACT_APP_WEATHER_KEY;

export const fetchFinance = createAsyncThunk('finance/fetchFinance', async () => {
    const response = await API.get(`&key=${key}`);
    return response.data.results;
});

const initialState = {
    data: null,
    loading: false,
    error: ''
}

export const financeSlice = createSlice({
    name: 'finance',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFinance.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchFinance.fulfilled, (state: any, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFinance.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
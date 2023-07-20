import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../API/watherFinanceApi";
import { CurrencyData, financeState } from "../../utils/types";

const key = process.env.REACT_APP_WEATHER_KEY;

export const fetchFinance = createAsyncThunk<CurrencyData, void>('finance/fetchFinance', async () => {
    const response = await API.get(`/finance?format=json-cors&key=${key}`);
    return response.data.results;
});

const initialState: financeState = {
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
            .addCase(fetchFinance.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFinance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});
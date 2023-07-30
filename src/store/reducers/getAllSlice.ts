import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";
import { TopNewsData, topNewsState } from "../../utils/types";

export const fetchAllNews = createAsyncThunk<TopNewsData, { limit: number, offset: number }>("AllNews", async ({ limit, offset }) => {
    const response = await API.get(`/news?limit=${limit}&offset=${offset}`);
    return response.data.results;
});

const initialState: topNewsState = {
    data: null,
    loading: false,
    error: '',
};

export const getAllSlice = createSlice({
    name: "getAll",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllNews.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllNews.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
});
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";
import { AllNewsData, AllNewsState } from "../../utils/types";

export const fetchAllNews = createAsyncThunk<AllNewsData, { limit: number, offset: number, section: string }>("AllNews", async ({ limit, offset, section }) => {
    const response = await API.get(`/news/posts?section=${section}?limit=${limit}&offset=${offset}`);
    return response.data.results;
});

const initialState: AllNewsState = {
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
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";
import { AllNewsData, AllNewsState } from "../../utils/types";

export const fetchSectionNews = createAsyncThunk<AllNewsData, { limit: number, offset: number, section: string }>("SectionNews", async ({ limit, offset, section }) => {
    const response = await API.get(`/news/posts?section=${section}&limit=${limit}&offset=${offset}`);
    return response.data.results;
});

const initialState: AllNewsState = {
    data: null,
    loading: false,
    error: '',
};

export const getSectionSlice = createSlice({
    name: "getSection",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSectionNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSectionNews.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSectionNews.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
});
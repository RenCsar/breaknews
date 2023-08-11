import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";
import { AllNewsData, AllNewsState } from "../../utils/types";

export const fetchOpiniaoNews = createAsyncThunk<AllNewsData, { section: string, limit: number, offset: number }>("opiniaoNews", async ({ section, limit, offset }) => {
    const response = await API.get(`/news/posts?section=${section}&limit=${limit}&offset=${offset}`);
    return response.data.results;
});

const initialState: AllNewsState = {
    data: null,
    loading: false,
    error: '',
};

export const opiniaoSlice = createSlice({
    name: "opiniao",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOpiniaoNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchOpiniaoNews.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchOpiniaoNews.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
});
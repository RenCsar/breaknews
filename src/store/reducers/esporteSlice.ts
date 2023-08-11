import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";
import { AllNewsData, AllNewsState } from "../../utils/types";

export const fetchEsporteNews = createAsyncThunk<AllNewsData, { section: string, limit: number, offset: number }>("esporteNews", async ({ section, limit, offset }) => {
    const response = await API.get(`/news/posts?section=${section}&limit=${limit}&offset=${offset}`);
    return response.data.results;
});

const initialState: AllNewsState = {
    data: null,
    loading: false,
    error: '',
};

export const esporteSlice = createSlice({
    name: "esporte",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEsporteNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEsporteNews.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchEsporteNews.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
});
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";
import { AllNewsData, AllNewsState } from "../../utils/types";

export const fetchCulturaNews = createAsyncThunk<AllNewsData, { section: string, limit: number, offset: number }>("culturaNews", async ({ section, limit, offset }) => {
    const response = await API.get(`/news/posts?section=${section}&limit=${limit}&offset=${offset}`);
    return response.data.results;
});

const initialState: AllNewsState = {
    data: null,
    loading: false,
    error: '',
};

export const culturaSlice = createSlice({
    name: "cultura",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCulturaNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCulturaNews.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCulturaNews.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }
});
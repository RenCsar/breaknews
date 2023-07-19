import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../API/newsApi';

export const fetchTopNews = createAsyncThunk('topNews/fetch', async () => {
    try {
        const response = await API.get('/news/top');
        return response.data.news;
    } catch (error: any) {
        console.log(error.message);
        throw error;
    }
});

const initialState = {
    data: null,
    loading: false,
    error: ''
};

export const topNewsSlice = createSlice({
    name: 'topNews',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopNews.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchTopNews.fulfilled, (state: any, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTopNews.rejected, (state: any, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    },
})
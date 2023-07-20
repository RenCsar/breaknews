import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../API/newsApi';
import { TopNewsData } from '../../utils/types';

export const fetchTopNews = createAsyncThunk<TopNewsData, void>('topNews/fetch', async () => {
    try {
        const response = await API.get('/news/top');
        return response.data.news;
    } catch (error: any) {
        throw error;
    }
});

const initialState: {
    data: TopNewsData | null;
    loading: boolean;
    error: string | undefined;
} = {
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
            .addCase(fetchTopNews.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTopNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    },
});
import { configureStore } from '@reduxjs/toolkit';
import { climaSlice } from './reducers/climaSlice';
import { financeSlice } from './reducers/financeSlice';
import { topNewsSlice } from './reducers/topNewsSlice';

export const Store = configureStore({
    reducer: {
        clima: climaSlice.reducer,
        finance: financeSlice.reducer,
        topNews: topNewsSlice.reducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>;
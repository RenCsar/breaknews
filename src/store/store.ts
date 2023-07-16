import { configureStore } from '@reduxjs/toolkit';
import { climaSlice } from './reducers/climaSlice';
import { financeSlice } from './reducers/financeSlice';

export const Store = configureStore({
    reducer: {
        clima: climaSlice.reducer,
        finance: financeSlice.reducer
    }
});
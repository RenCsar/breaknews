import { configureStore } from '@reduxjs/toolkit';
import { climaSlice } from './reducers/climaSlice';

export const Store = configureStore({
    reducer: {
        clima: climaSlice.reducer
    }
});
import { configureStore } from '@reduxjs/toolkit';
import { climaSlice } from './reducers/climaSlice';
import { financeSlice } from './reducers/financeSlice';
import { topNewsSlice } from './reducers/topNewsSlice';
import { getAllSlice } from './reducers/allNewsSlice';
import { opiniaoSlice } from './reducers/opiniaoSlice';
import { culturaSlice } from './reducers/culturaSlice';
import { esporteSlice } from './reducers/esporteSlice';
import { authSlice } from './reducers/AuthSlice';
import { cadastroSlice } from './reducers/cadastroSlice';

export const Store = configureStore({
    reducer: {
        clima: climaSlice.reducer,
        finance: financeSlice.reducer,
        topNews: topNewsSlice.reducer,
        getAll: getAllSlice.reducer,
        opiniao: opiniaoSlice.reducer,
        cultura: culturaSlice.reducer,
        esporte: esporteSlice.reducer,
        auth: authSlice.reducer,
        cadastro: cadastroSlice.reducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>;
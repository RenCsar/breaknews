import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";
import { CadastroState, TCadastrarEntries, TCadastrarResponse } from "../../utils/types";

export const Cadastrar = createAsyncThunk<TCadastrarResponse, TCadastrarEntries>("cadastrar", async (cadastrar, { rejectWithValue }) => {
    try {
        const response = await API.post("/user/", cadastrar);
        return { data: response.data, redirectTo: "/" };
    } catch (err: any) {
        console.log(err)
        return rejectWithValue(err.response?.data?.message);
    }
});

const initialState: CadastroState = {
    data: null,
    cadastroLoading: false,
    cadastroMessage: '',
};

export const cadastroSlice = createSlice({
    name: 'cadastro',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Cadastrar.pending, (state) => {
                state.cadastroLoading = true;
                state.cadastroMessage = '';
            })
            .addCase(Cadastrar.fulfilled, (state, action) => {
                state.cadastroLoading = false;
                state.data = action.payload;
            })
            .addCase(Cadastrar.rejected, (state, action) => {
                state.cadastroLoading = false;
                if (action.payload) {
                    state.cadastroMessage = action.payload as string;
                } else {
                    state.cadastroMessage = 'Ocorreu um erro inesperado!';
                }
            })
    }
});
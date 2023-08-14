import { createSlice, createAsyncThunk, ThunkAction } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";
import { AuthState, TAuthResponse, TLoginEntries } from "../../utils/types";
import { RootState } from "../store";

export const Auth = createAsyncThunk<TAuthResponse, TLoginEntries>("login", async (login, { rejectWithValue }) => {
    try {
        const response = await API.post("/auth/", login);
        API.defaults.headers.common['Authorization'] = response.data.token;
        localStorage.setItem('token', response.data.token);
        return { data: response.data, redirectTo: "/" };
    } catch (err: any) {
        return rejectWithValue(err.response?.data?.message);
    }
});

export const logout = (): ThunkAction<void, RootState, unknown, any> => (dispatch: any) => {
    localStorage.removeItem('token');
    delete API.defaults.headers.common['Authorization'];
    dispatch(setToken(null));
    dispatch(setMessage(''));
};

const initialState: AuthState = {
    token: null,
    loginLoading: false,
    loginMessage: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setMessage: (state, action) => {
            state.loginMessage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(Auth.pending, (state) => {
                state.loginLoading = true;
            })
            .addCase(Auth.fulfilled, (state, action) => {
                const { token, message } = action.payload.data;
                state.token = token;
                state.loginMessage = message;
                state.loginLoading = false;
            })
            .addCase(Auth.rejected, (state, action) => {
                if (action.payload) {
                    state.loginMessage = action.payload as string;
                } else {
                    state.loginMessage = 'Ocorreu um erro inesperado!';
                }
                state.loginLoading = false;
            });
    },
});

export const { setToken, setMessage } = authSlice.actions;
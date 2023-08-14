import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API/newsApi";

export const Auth = createAsyncThunk<any, any>("login", async (login: any, { rejectWithValue }) => {
    try {
        const response = await API.post("/auth/", login);
        API.defaults.headers.common['Authorization'] = response.data.token;
        localStorage.setItem('token', response.data.token);
        return { data: response.data, redirectTo: "/" };
    } catch (err: any) {
        return rejectWithValue(err.response?.data?.message);
    }
});

export const logout = () => (dispatch: any) => {
    localStorage.removeItem('token');
    delete API.defaults.headers.common['Authorization'];
    dispatch(setToken(null));
    dispatch(setMessage(''));
};

interface AuthState {
    token: string | null;
    loginMessage: string | unknown | any;
    loginLoading: boolean,
}

// interface AuthResponse {
//     data: any;
//     redirectTo?: string;
// }

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
            .addCase(Auth.rejected, (state, action: any) => {
                state.loginMessage = action.payload;
                state.loginLoading = false;
            });
    },
});

export const { setToken, setMessage } = authSlice.actions;
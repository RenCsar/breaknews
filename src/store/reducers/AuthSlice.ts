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
    message: string | unknown | any;
}

// interface AuthResponse {
//     data: any;
//     redirectTo?: string;
// }

const initialState: AuthState = {
    token: null,
    message: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(Auth.fulfilled, (state, action) => {
                const { token, message } = action.payload.data;
                state.token = token;
                state.message = message;
            })
            .addCase(Auth.rejected, (state, action: any) => {
                state.message = action.payload;
            });
    },
});

export const { setToken, setMessage } = authSlice.actions;
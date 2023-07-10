import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance as axios } from "../../../utils/axiosInstance";

const login = createAsyncThunk("auth/login",
    async (code: string, { dispatch, rejectWithValue }) => {
        try {
            const resp = await axios.post(`login?code=${code}`);
            return resp.data;
        } catch {
            return rejectWithValue("errorMessage");
        }
    }
);

export default login;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const logout = createAsyncThunk("auth/login",
    async (code: string, { dispatch, rejectWithValue }) => {
        try {
            const resp = await axios.get("/logout");
            return resp.data;
        } catch {
            return rejectWithValue("errorMessage");
        }
    }
);

export default logout;

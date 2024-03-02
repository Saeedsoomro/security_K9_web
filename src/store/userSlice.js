import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Thunk function for user login
export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("/api/v1/login", userData); // Call your login API function
      dispatch(getUser());
      return response.data; // Assuming the API returns user data upon successful login
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error message to reducer
    }
  }
);

// Thunk function for user signup
export const signupUser = createAsyncThunk(
  "user/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/register", userData); // Call your signup API function
      return response.data; // Assuming the API returns user data upon successful signup
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error message to reducer
    }
  }
);
export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/me"); // Call your signup API function
      return response.data; // Assuming the API returns user data upon successful signup
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error message to reducer
    }
  }
);
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/logout"); // Call your signup API function
      return response.data; // Assuming the API returns user data upon successful signup
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error message to reducer
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;

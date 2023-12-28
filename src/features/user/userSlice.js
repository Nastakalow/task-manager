import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { registerWithEmailAndPassword } from "../../services/auth";
import { fetchUsers } from "../../services/user";

const initialState = {
  users: [],
  loading: false,
};

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const res = await registerWithEmailAndPassword(userData);

    if (res.status === 200) {
      return userData;
    }

    return [];
  }
);

export const getUsers = createAsyncThunk("users/getUsers", async (id) => {
  const response = await fetchUsers(id);

  return response;
});

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: 0, title: "Task 0" }],
};

export const { actions, reducer } = createSlice({
  name: "taskStore",
  initialState,
  reducers: {},
});

export const selectTasks = (state) => state.taskStore.tasks;

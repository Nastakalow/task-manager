import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createTaskFetch, fetchTasks } from "../../services/task";

const initialState = {
  tasks: [],
  loading: false,
};

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData) => {
    const res = await createTaskFetch(taskData);

    if (res.status) {
      return taskData;
    }

    return {};
  }
);

export const getTasks = createAsyncThunk("tasks/getTasks", async (id) => {
  const response = await fetchTasks(id);

  return response;
});

export const { actions, reducer } = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });

    builder.addCase(createTask.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks.push(action.payload);
    });
  },
});

import { configureStore } from "@reduxjs/toolkit";

import { reducer as taskStoreReducer } from "./task-store";

export const store = configureStore({
  reducer: {
    taskStore: taskStoreReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../features/user/userSlice";
import { reducer as taskReducer } from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    tasks: taskReducer,
  },
});

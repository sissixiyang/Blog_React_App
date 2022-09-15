import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {// whenever the website wants to use functions, ask reducer!
    user: userReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducer/userCrudSlice";
import loginReducer from "./reducer/userSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    user: loginReducer,
  },
});

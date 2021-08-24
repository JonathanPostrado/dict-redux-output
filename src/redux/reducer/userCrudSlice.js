import { createSlice } from "@reduxjs/toolkit";
import { displayUserInfoThunk } from "../../thunk/userThunk";


const userCrudSlice = createSlice({
  name: "users",
  initialState: {
    usersInfo: [],
    loading: false,
  },
  reducers: {
    addUserReducer:(state, action) => {
      state.usersInfo.push(action.payload);
    },
    updateUserReducer: (state, action) => {
      const { id, name, username, email, phone, location, status } = action.payload;
      const previousUserData = state.usersInfo.find((user) => user.id === id);
      if (previousUserData) {
        previousUserData.name = name;
        previousUserData.username = username;
        previousUserData.email = email;
        previousUserData.phone = phone;
        previousUserData.location = location;
        previousUserData.status = status;
      }
    },
    removeUserReducer: (state, action) => {
      const { id } = action.payload;
      const previousUserData = state.usersInfo.find((user) => user.id === id);
      if (previousUserData) {
        state.usersInfo = state.usersInfo.filter((user) => user.id !== id);
      }
    },
  },
  extraReducers: {
    [displayUserInfoThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [displayUserInfoThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersInfo = [...state.usersInfo, ...action.payload];
    },
    [displayUserInfoThunk.rejected]: (state, action) => {
      state.loading = false;
    }

  },
});

export const { addUserReducer, updateUserReducer, removeUserReducer } = userCrudSlice.actions;

export default userCrudSlice.reducer;

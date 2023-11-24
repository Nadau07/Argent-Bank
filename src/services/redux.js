import { configureStore, createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      token: null,
      userName: localStorage.getItem("userName"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
    },
  },
  reducers: {
    LoginSuccess: (state, action) => {
      state.userInfo.token = action.payload.token;
      state.userInfo.userName = action.payload.userName;
      state.userInfo.firstName = action.payload.firstName;
      state.userInfo.lastName = action.payload.lastName;
    },
    LoginFailure: (state) => {
      state.userInfo.token = null;
    },
    LogOut: (state) => {
      state.userInfo = {
        token: null,
        userName: null,
        firstName: null,
        lastName: null,
      };
    },
    EditUser: (state, action) => {
      if (action.payload.userName) {
        state.userInfo.userName = action.payload.userName;
      }
    },
  },
});

export const selectToken = (state) => state.user.userInfo.token;

export const UserData = (state) => ({
  userName: state.user.userInfo.userName,
  firstName: state.user.userInfo.firstName,
  lastName: state.user.userInfo.lastName,
});

export const store = configureStore({
  reducer: {
    user: infoSlice.reducer,
  },
});

export const { LoginSuccess, LoginFailure, LogOut, EditUser } =
  infoSlice.actions;

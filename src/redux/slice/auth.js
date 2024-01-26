import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Akhlaque",
    email: "akhlaqueahmad119@gmail.com",
    phone: "+91 7987557295",
    address: "New Delhi",
    userId:1,
  },
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // updateUserAction: (state, action) => {
    //   state.user = action.payload.user;
    // },
    loginAction: (state, action) => {
      state.user = action.payload.user;
      state.isLogin = true;
    },
    // logoutAction: () => {
    //   localStorage.clear();
    //   return initialState;
    // },
  },
});

export const { loginAction, updateUserAction } = authSlice.actions;

export default authSlice.reducer;

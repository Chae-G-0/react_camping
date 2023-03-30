// import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  id: "",
  isLoginState: false,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    ISLOGIN: (state, payload) => {
      state.isLoginState = payload;
    },
  },
});

export const { ISLOGIN } = loginSlice.actions;
export default loginSlice.reducer;

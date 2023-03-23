import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// const authData = createAsyncThunk(
//   "loginSlice/authData",
//   async (ACCESS_TOKEN) => {
//     const res = await axios.post("/api/verify", {
//       headers: {
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//       },
//     });
//     if (res.data.RESULT) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// );

const initialState = {
  id: "",
  isLoginState: false,
};

export const userData = createAsyncThunk("loginSlice/userData",
  async () => {
    const res = await axios.get("/api/userdata");
    return res.data
  }
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    ISLOGIN: (state, payload) => {
      state.isLoginState = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userData.pending, (state, action) => {
      console.log("loading");
    });
    builder.addCase(userData.fulfilled, (state, action) => {
      console.log("login complete");
      state.id = action.payload;
    });
    builder.addCase(userData.rejected, (state, action) => {
      console.log("fail");
    });
  },
});

export const { ISLOGIN } = loginSlice.actions;
export default loginSlice.reducer;
// export { authData };

import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const authData = createAsyncThunk("loginSlice/LOGIN", async (access_token) => {
  const res = await axios.post(
    "/api/verify",
    {},
    {
      headers: {
        Authorization: access_token,
      },
    }
  );
  if (res.data.ACCESS_TOKEN) {
    return Object.values(res.data);
  } else {
    return Object.apply(res.data);
  }
});

// const signUpAsync = createAsyncThunk(
//   "/signUpAsync",
//   async (userInfo, { rejectWithValue }) => {
//     try {
//       const res = await axios.post("/api/signup", {
//         name: userInfo.name,
//         email: userInfo.email,
//         password: userInfo.password,
//       });
//       return { ...res.data, name: `${userInfo.name}` };
//     } catch (err) {
//       return rejectWithValue(err.res.data);
//     }
//   }
// );

const initialState = {
  name: "",
  email: "",
  password: "",
  isLoginState: false,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    LOGIN: (state) => {
      state.isLoginState = true;
    },
    LOGOUT: (state) => {
      state.isLoginState = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authData.pending, (state, action) => {
      return state;
    });
    builder.addCase(authData.fulfilled, (state, action) => {
      console.log("login complete")
      state.isLoginState = action.payload;
    });
    builder.addCase(authData.rejected, (state, action) => {
      return state;
    });
  },
});

export const { LOGIN, LOGOUT } = loginSlice.actions;
export default loginSlice.reducer;
export { authData };

import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const authData = createAsyncThunk("loginSlice/LOGIN", async (userState) => {
  const result = await axios.post(
    "/api/verify",
    {},
    {
      headers: {
        Authorization: userState,
      },
    }
  );
  if (result.data.ACCESS_TOKEN) {
    return Object.values(result.data);
  } else {
    return Object.apply(result.data);
  }
});

const signUpAsync = createAsyncThunk(
  "/signUpAsync",
  async (signupInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/signup", {
        name: signupInfo.name,
        email: signupInfo.email,
        password: signupInfo.password,
      });
      return { ...response.data, name: `${signupInfo.name}` };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

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
      state.isLoginState = action.payload;
    });
    builder.addCase(authData.rejected, (state, action) => {
      return state;
    });
  },
});

export const { LOGIN, LOGOUT } = loginSlice.actions;
export default loginSlice.reducer;
export { authData, signUpAsync };

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

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
    LOG_IN: (isLoginState, action) => {
      return { ...isLoginState, ...action.payload };
    },
  },
});

export const signUpAsync = createAsyncThunk(
  "/signup",
  async (signupInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post("/signup", {
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

export const { LOG_IN } = loginSlice.reducer;
export default loginSlice.reducer;

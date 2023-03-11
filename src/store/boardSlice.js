const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

export const boardData = createAsyncThunk("boardData", async () => {
  const res = await axios.get("http://localhost:8080/api/boardlist");
  return res.data;
});

const boardSlice = createSlice({
  name: "boardSlice",
  initialState: { list: [] },
  reducers: {},
  extraReducers: {
    [boardData.pending]: (state, action) => {
      console.log("pending");
    },
    [boardData.fulfilled]: (state, action) => {
      state.list = action.payload
      console.log("fulfeild");
    },
    [boardData.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export default boardSlice.reducer;

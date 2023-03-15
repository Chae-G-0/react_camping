import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const boardData = createAsyncThunk("boardSlice/boardData", async () => {
  const res = await axios.get("/api/boardlist");
  return res.data;
});

const boardSlice = createSlice({
  name: "boardSlice",
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(boardData.pending, (state, action) => {});
    builder.addCase(boardData.fulfilled, (state, action) => {
      console.log("complete");
      state.list = action.payload;
    });
    builder.addCase(boardData.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
        console.log(action.error.message);
      }
    });
  },
});

export default boardSlice.reducer;
export { boardData };

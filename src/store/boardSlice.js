import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// 게시판 데이터 가져오는 함수
const boardData = createAsyncThunk("boardSlice/boardData", async () => {
  const res = await axios.get("/api/boardlist");
  return res.data;
});

let nextPostId = 1;

// 게시글 등록 함수
const boardWrite = createAsyncThunk(
  "boardSlice/boardWrite",
  async (boardInfo, { getState }) => {
    const { list } = getState().board;
    const maxId = Math.max(list.map((it) => it.id));
    console.log(maxId);
    nextPostId = maxId + 1;
    console.log(nextPostId);
    try {
      const res = await axios.post("/api/board", {
        ...boardInfo,
        id: nextPostId,
      });
      if (res.status === 200) {
        console.log("등록 됨!");
        alert("게시글이 등록되었습니다.");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const boardSlice = createSlice({
  name: "boardSlice",
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(boardWrite.fulfilled, (state, action) => {
      console.log("complete post");
      return state;
    });
    builder.addCase(boardData.fulfilled, (state, action) => {
      console.log("complete get data");
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
// export const { IDINCREASE } = boardSlice.actions;

export { boardData, boardWrite };

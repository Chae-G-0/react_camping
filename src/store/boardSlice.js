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
    const maxId = list.reduce(
      (max, post) => (post.id > max ? post.id : max),
      0
    );
    nextPostId = maxId + 1;
    try {
      const res = await axios.post("/api/board", {
        ...boardInfo,
        id: nextPostId,
      });
      if (res.status === 200) {
        alert("게시글이 등록되었습니다.");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const boardEdit = createAsyncThunk("boardSlice/boardEdit", async (editInfo) => {
  const res = await axios.put("/api/boardupdate", {
    _id: editInfo[0],
    title: editInfo[1],
    content: editInfo[2],
  });
  return res;
});

const boardDelete = createAsyncThunk("boardSlice/boardDelete", async (_id) => {
  const res = await axios.delete("/api/boarddelete", {
    data: {
      _id: _id,
    },
  });
  return res.data;
});

const boardSlice = createSlice({
  name: "boardSlice",
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(boardWrite.fulfilled, (state, action) => {
      return state;
    });
    builder.addCase(boardData.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(boardDelete.fulfilled, (state, action) => {
      return state;
    });
    builder.addCase(boardEdit.fulfilled, (state, action) => {
      return state;
    });
  },
});

export default boardSlice.reducer;
// export const { IDINCREASE } = boardSlice.actions;

export { boardData, boardWrite, boardEdit, boardDelete };

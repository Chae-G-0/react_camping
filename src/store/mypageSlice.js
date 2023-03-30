const { createSlice } = require("@reduxjs/toolkit");

const mypageSlice = createSlice({
  name: "mypageSlice",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      state = state.filter((it) => it !== action.payload);
      return state;
    },
  },
});

export default mypageSlice.reducer;
export const { addItem, deleteItem } = mypageSlice.actions;

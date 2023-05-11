import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    totalPages: 1,
    limitPage: 8,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setPageSize: (state, action) => {
      state.limitPage = action.payload;
    },
  },
});
export const { setCurrentPage, setTotalPages, setPageSize } =
  paginationSlice.actions;

export default paginationSlice.reducer;

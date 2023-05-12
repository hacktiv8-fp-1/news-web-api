import { getData } from "@/utils/Fetch";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNewsData = createAsyncThunk("news/getNews", async (url) => {
  const response = await getData(url);
  return response;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    status: "idle",
    loading: "false",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsData.pending, (state) => {
      state.status = "loading";
      state.loading = true;
    });
    builder.addCase(fetchNewsData.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: "false",
        data: action.payload.articles,
      };
    });
    builder.addCase(fetchNewsData.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;

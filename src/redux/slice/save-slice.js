import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmarks: [],
  },
  reducers: {
    addFavoriteNews: (state, action) => {
      const existingNew = state.bookmarks.find(
        (news) => news.url === action.payload.url
      );
      console.log("ex2", existingNew);
      console.log("ex1", action);
      if (!existingNew) {
        state.bookmarks?.push(action.payload);
      }
    },
    removeFavoriteNews: (state, action) => {
      const updateFavMovieList = state.bookmarks.filter(
        (news) => news.url !== action.payload
      );
      console.log("update", updateFavMovieList);
      state.bookmarks = updateFavMovieList;
    },
  },
});
export const {
  addFavoriteNews: addFavorite,
  removeFavoriteNews: removeFavorite,
} = bookmarksSlice.actions;

export default bookmarksSlice.reducer;

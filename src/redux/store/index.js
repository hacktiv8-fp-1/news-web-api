import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import newsReducer from "@/redux/slice/news-slice";
import bookmarksReducer from "@/redux/slice/save-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import paginateReducer from "../slice/paginate-slice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducers = combineReducers({
  news: newsReducer,
  bookmark: bookmarksReducer,
  pagination: paginateReducer,
});

const persist = persistReducer(persistConfig, rootReducers);

const store = () =>
  configureStore({
    reducer: persist,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const wrapper = createWrapper(store);

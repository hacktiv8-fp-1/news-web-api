import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import newsReducer from "@/redux/slice/news-slice";
import bookmarksReducer from "@/redux/slice/save-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeltem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== "undefined"
//     ? createwebStorage("local")
//     : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducers = combineReducers({
  news: newsReducer,
  bookmark: bookmarksReducer,
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

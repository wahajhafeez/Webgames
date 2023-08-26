// import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slices/counterSlice";
import counter2 from "./slices/counter2";
// import { createStore } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

let combinedReducer = combineReducers({
  counter: counterSlice,
  counter2: counter2,
});
const persistConfig = {
  key: "root",
  storage,

  whitelist: ["counter2"],
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(logger),
});
const persistor = persistStore(store);

export { store };

// export const store = configureStore({
//   reducer: {counter:counterSlice,
//   counter2:counter2},
// })

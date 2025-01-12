import { configureStore } from "@reduxjs/toolkit";
import chatHistoryReducer from "./slices/chat-history-slice";

export const store = configureStore({
  reducer: {
    chat: chatHistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "store/slices/noteSlice";

export const store = configureStore({
  reducer: {
    note: noteSlice,
  },
});

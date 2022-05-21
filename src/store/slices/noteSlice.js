import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { requestApi } from "config/apiHandler";

export const fetchNotes = createAsyncThunk(
  "note/fetchNotes",
  async (value, { getState, requestId, rejectWithValue }) => {
    const { currentRequestId, loading } = getState().note;
    if (loading !== "pending" || requestId !== currentRequestId) {
      return;
    }
    try {
      const response = await requestApi("/fetchNotes", "GET");
      if (response) {
        return response;
      }
    } catch (err) {
      throw err;
    }
  }
);
export const addNote = createAsyncThunk(
  "note/addNote",
  async (requestData, { getState, requestId, rejectWithValue }) => {
    const { currentRequestId, loading } = getState().note;
    if (loading !== "pending" || requestId !== currentRequestId) {
      return;
    }
    try {
      const response = await requestApi("/addNote", "GET", requestData);
      if (response) {
        return response;
      }
    } catch (err) {
      throw err;
    }
  }
);
export const deleteNote = createAsyncThunk(
  "note/deleteNote",
  async (requestData, { getState, requestId, rejectWithValue }) => {
    const { currentRequestId, loading } = getState().note;
    if (loading !== "pending" || requestId !== currentRequestId) {
      return;
    }
    try {
      const response = await requestApi("/deleteNote", "GET", requestData);
      if (response) {
        return response;
      }
    } catch (err) {
      throw err;
    }
  }
);

const initialState = {
  currentRequestId: undefined,
  loading: "idle",
  error: null,
  data: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.data = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here. action.payload.errorMessage
          state.error = action.payload ? action.payload : action.error.message;
          state.currentRequestId = undefined;
          state.loading = "idle";
        }
      })
      .addCase(addNote.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(addNote.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.data = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(addNote.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here. action.payload.errorMessage
          state.error = action.payload ? action.payload : action.error.message;
          state.currentRequestId = undefined;
          state.loading = "idle";
        }
      })
      .addCase(deleteNote.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.loading = "idle";
          state.data = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(deleteNote.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === "pending" &&
          state.currentRequestId === requestId
        ) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here. action.payload.errorMessage
          state.error = action.payload ? action.payload : action.error.message;
          state.currentRequestId = undefined;
          state.loading = "idle";
        }
      });
  },
});

// Action creators are generated for each case reducer function
// export const { setShowWelcome } = initSlice.actions;
export const {} = noteSlice.actions;
export default noteSlice.reducer;

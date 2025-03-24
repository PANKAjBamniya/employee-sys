import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminServices from "./adminServices";

const authSlice = createSlice({
  name: "admin",
  initialState: {
    allUser: [],
    allTasks: [],
    singleUserTask: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle getAllTasks
      .addCase(getAllTasks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allTasks = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // Handle getAllUsers
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allUser = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // Handle add Task
      .addCase(addTasks.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allTasks = [action.payload, ...state.allTasks];
      })
      .addCase(addTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // Handle getAll USer Tasks
      .addCase(getUserAllTask.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getUserAllTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleUserTask = action.payload;
      })
      .addCase(getUserAllTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;

// Async thunks
export const getAllUsers = createAsyncThunk(
  "ADMIN/USERS",
  async (_, thunkAPI) => {
    try {
      return await adminServices.fetchAllUsers();
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllTasks = createAsyncThunk(
  "ADMIN/TASKS",
  async (_, thunkAPI) => {
    try {
      return await adminServices.fetchAllTasks();
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// addtask
export const addTasks = createAsyncThunk(
  "ADMIN/ADD",
  async (formData, thunkAPI) => {
    try {
      return await adminServices.createTask(formData);
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Users Thunk API

// Get UserAllTask
export const getUserAllTask = createAsyncThunk(
  "USER/TASK",
  async (id, thunkAPI) => {
    try {
      return await adminServices.getUserTask(id);
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

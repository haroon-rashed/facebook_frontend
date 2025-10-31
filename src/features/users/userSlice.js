import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getMyInfo, logUser, regUserService, verifyOTP } from "./userService";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userError: false,
  userLoading: false,
  userSuccess: false,
  userMessage: "",
  allUsers: [],
  myInfo: {}
};

export const regUserSlice = createAsyncThunk(
  "reg-user",
  async (userData, thunkAPI) => {
    try {
      return await regUserService(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "login-user",
  async (userData, thunkAPI) => {
    try {
      return await logUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const verifyUserOTP = createAsyncThunk(
  "verify-otp",
  async (otpData, thunkAPI) => {
    try {
      return await verifyOTP(otpData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);
export const getMyData = createAsyncThunk(
  "my-data",
  async (user_id, thunkAPI) => {
    try {
      return await getMyInfo(user_id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);


export const getAllUsersData = createAsyncThunk('get-all-users', async (_, thunkAPI) => {
  try {
    return await getAllUsers()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error)
  }
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {


    userReset: (state) => {
      state.userLoading = false;
      state.userError = false;
      state.userMessage = "";
      state.userSuccess = false;
    },
    logoutUser: (state) => {
      state.user = null,
        state.userError = false,
        state.userLoading = false,
        state.userMessage = ""
      localStorage.removeItem('user')  // Remove users from Local-Store /Changes
    }


  },
  extraReducers: (builder) => {
    builder
      .addCase(regUserSlice.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(regUserSlice.rejected, (state, action) => {
        state.userLoading = false;
        state.userMessage = action.payload;
        state.userError = true;
        state.user = null;
      })
      .addCase(regUserSlice.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(getAllUsersData.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(getAllUsersData.rejected, (state, action) => {
        state.userLoading = false;
        state.userMessage = action.payload;
        state.userError = true;
      })
      .addCase(getAllUsersData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.allUsers = action.payload;
      })

      .addCase(loginUser.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
        state.user = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })

      .addCase(verifyUserOTP.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(verifyUserOTP.rejected, (state, action) => {
        state.userError = true;
        state.userLoading = false;
        state.userMessage = action.payload;
      })
      .addCase(verifyUserOTP.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      })
      .addCase(getMyData.pending, (state, action) => {
        state.userLoading = true
      })
      .addCase(getMyData.rejected, (state, action) => {
        state.userLoading = false
        state.userError = true
        state.userMessage = action.payload
      })
      .addCase(getMyData.fulfilled, (state, action) => {
        state.userLoading = false
        state.userSuccess = true
        state.myInfo = action.payload
      })
  },
});

export default authSlice.reducer;
export const { userReset } = authSlice.actions;

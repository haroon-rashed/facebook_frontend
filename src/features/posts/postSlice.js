import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addComment, addPost, getAllPosts, getReactions, makeReaction } from "./postService";

const initialState = {
  posts: [],
  postLoading: false,
  postError: false,
  postSuccess: false,
  postMessage: "",
  reactionLoading: false,
  reactionSuccess: false,
  reactionError: false,
  reacts: [],
  commentLoading: false,
  commentSuccess: false,
  commentError: false
};

export const addPostData = createAsyncThunk(
  "add-post",
  async (postData, thunkAPI) => {
    try {
      return await addPost(postData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error); // FIXED: typo 'respose' to 'response'
    }
  }
);

export const getPostData = createAsyncThunk(
  "get-posts",
  async (_, thunkAPI) => {
    try {
      return await getAllPosts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const addReactionData = createAsyncThunk('add-reaction', async (reactionData, thunkAPI) => {
  try {
    return await makeReaction(reactionData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error)
  }
})

export const getReactionsData = createAsyncThunk('get-reactions', async (post_id, thunkAPI) => {
  try {
    return await getReactions(post_id)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error)
  }
})

export const addCommentData = createAsyncThunk('add-comment', async (postData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await addComment(postData, token)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error)
  }
})

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postReset: (state) => {
      state.postError = false;
      state.postLoading = false;
      state.postMessage = "";
      state.postSuccess = false;
      state.reactionSuccess = false;
      state.reactionError = false;
      state.commentLoading = false
      state.commentError = false
      state.commentSuccess = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPostData.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(addPostData.rejected, (state, action) => {
        state.postLoading = false;
        state.postError = true;
        state.postMessage = action.payload;
      })
      .addCase(addPostData.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postSuccess = true;
        state.posts.unshift(action.payload); // COMMENT: This will now include video data from backend
      })
      .addCase(getPostData.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(getPostData.rejected, (state, action) => {
        state.postLoading = false;
        state.postError = true;
        state.postMessage = action.payload;
      })
      .addCase(getPostData.fulfilled, (state, action) => {
        state.postLoading = false;
        state.posts = action.payload;
      })
      .addCase(addReactionData.pending, (state, action) => {
        state.reactionLoading = true
      })
      .addCase(addReactionData.rejected, (state, action) => {
        state.reactionLoading = false
        state.reactionError = true
        state.postMessage = action.payload
      })
      .addCase(addReactionData.fulfilled, (state, action) => {
        state.posts = state.posts.map((item, index) => {
          if (item._id == action.payload.likes[0].post_id) {
            return {
              ...item,
              likes: action.payload.likes
            }
          }
          return item
        })
      })
      .addCase(getReactionsData.pending, (state, action) => {
        state.reactionLoading = true
      })
      .addCase(getReactionsData.rejected, (state, action) => {
        state.reactionLoading = false
        state.reactionError = true
        state.postMessage = action.payload
      })
      .addCase(getReactionsData.fulfilled, (state, action) => {
        state.reactionLoading = false;
        state.reactionSuccess = true
        state.reacts = action.payload
      })
      .addCase(addCommentData.pending, (state, action) => {
        state.commentLoading = true
      })
      .addCase(addCommentData.rejected, (state, action) => {
        state.commentLoading = false
        state.commentError = true
        state.postMessage = action.payload
      })
      .addCase(addCommentData.fulfilled, (state, action) => {
        state.commentLoading = false;
        state.commentSuccess = true;

        state.posts = state.posts.map((item, index) => {
          if (item._id == action.payload.comments[0].post_id) {
            return {
              ...item,
              comments: action.payload.comments
            }
          }
          return item
        })
      })
  },
});

export const { postReset } = postSlice.actions;
export default postSlice.reducer;
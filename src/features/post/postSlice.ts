import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostProps } from "../../interfaces/post";

const setPostSlice = createSlice({
  name: "post",
  initialState: {
    id: 0,
    title: "",
    content: "",
    lat: "",
    long: "",
    image_url: "",
    created_at: "",
    updated_at: "",
  },
  reducers: {
    setPost(_state, action: PayloadAction<PostProps>) {
      return action.payload;
    },
  },
});

const setPostsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setPosts(_state, action: PayloadAction) {
      return action.payload;
    },
  },
});

const setRefreshPostsSlice = createSlice({
  name: "refresh_posts",
  initialState: 0,
  reducers: {
    setRefreshPosts(_state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

const setIsLoadingSlice = createSlice({
    name: 'is_loading',
    initialState: true,
    reducers: {
        setIsLoading(_state,action:PayloadAction<boolean>){
            return action.payload;
        }
    }
});

export const { setPost } = setPostSlice.actions;
export const { setPosts } = setPostsSlice.actions;
export const { setRefreshPosts } = setRefreshPostsSlice.actions;
export const { setIsLoading } = setIsLoadingSlice.actions;

export const current_post = setPostSlice.reducer;
export const posts = setPostsSlice.reducer;
export const refresh_posts = setRefreshPostsSlice.reducer;
export const is_loading = setIsLoadingSlice.reducer;
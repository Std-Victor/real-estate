import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios.clients.js";

export const loginUser = createAsyncThunk(
  "guest/login",
  async (user_data, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post("/login", user_data);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 422) {
        if (error.response.data.errors) {
          // return rejectWithValue(error.response.data.errors);
          throw new Error(JSON.stringify(error.response.data.errors))
        } else {
          // return rejectWithValue(error.response.data.message);
          throw new Error(error.response.data.message);
        }
      }
      throw error;
    }
  }
);

export const SignUpUser = createAsyncThunk(
  "guest/SignUp",
  async (user_data, {rejectWithValue}) => {
      try {
          const data = await axiosClient.post("/signup", user_data);
          return data;
      } catch (error) {
          if (error.response && error.response.status === 422) {
              if (error.response.data.errors) {
                  return rejectWithValue(error.response.data.errors);
              } else {
                  return rejectWithValue(error.response.data.message);
              }
          }
      }
  }
);

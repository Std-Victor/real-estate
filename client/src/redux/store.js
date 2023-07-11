import {configureStore} from "@reduxjs/toolkit";
import guestReducer from './guest/guest.slice.js';
import {logger} from "redux-logger/src";
import userReducer from "./user/user.slice.js";

const store = configureStore({
  reducer : {
    guest: guestReducer,
    user: userReducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
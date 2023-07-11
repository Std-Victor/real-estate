import {createSlice} from "@reduxjs/toolkit";
import {loginUser, SignUpUser} from "./user.api.calls.js";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        token: localStorage.getItem('ACCESS_TOKEN'),
        pending: false,
        errors: null
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setToken : (state, action) => {
            state.token = action.payload;
            action.payload ? localStorage.setItem('ACCESS_TOKEN', action.payload) : localStorage.removeItem('ACCESS_TOKEN');
        }
    },
    extraReducers: {
    //     Login :
        [loginUser.pending]: state => {
            state.pending = true;
            state.errors = null;
        },
        [loginUser.fulfilled]: (state, {user, token}) => {
            state.currentUser = user;
            state.token = token;
            localStorage.setItem('ACCESS_TOKEN', token);
            state.pending= false;
        },
        [loginUser.rejected]: (state,{payload}) => {
            state.errors = payload ? payload.toString() : "Unknown error";
            state.pending = false;
        },
    //     Sign Up:
        [SignUpUser.pending]: state => {
            state.pending = true;
            state.errors = null;
        },
        [SignUpUser.fulfilled]: (state, action ) => {
            // state.currentUser = user;
            // state.token = token;
            // localStorage.setItem('ACCESS_TOKEN', token);
            state.pending= false;
            state.errors = action.payload
        },
        [SignUpUser.rejected]: (state, {payload}) => {
            state.errors = payload ? payload.toString() : "Unknown error";
            state.pending = false;
        },

    }
})

export const { setCurrentUser, setToken} = userSlice.actions;
export default userSlice.reducer;
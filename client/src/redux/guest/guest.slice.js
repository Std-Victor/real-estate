import {createSlice} from "@reduxjs/toolkit";

const guestSlice = createSlice({
  name: 'guest',
  initialState: {
    openModal: false,
    modal: '',
    pageExists: true,

  },
  reducers : {
    toggleModal : (state, action) => {
      state.openModal = !state.openModal;
      state.modal = action.payload;
    },
    togglePageExists: (state, action) => {
      state.pageExists = action.payload;
    }
  }
})

export const { toggleModal,togglePageExists } = guestSlice.actions

export default guestSlice.reducer
import { createSlice } from '@reduxjs/toolkit'; //used to split the logic and access it anywhere in the application

const initialStateValue = { name: '', age: 0, email: '' };

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue }, //creating initial state as per the requirement
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

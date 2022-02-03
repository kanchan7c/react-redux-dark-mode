import { createSlice } from '@reduxjs/toolkit'; //used to split the logic and access it anywhere in the application

const initialStateValue = { background: 'white', text: 'black' };

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue }, //creating initial state as per the requirement
  reducers: {
    darkTheme: (state, action) => {
      state.value = action.payload;
    },
    lightTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;

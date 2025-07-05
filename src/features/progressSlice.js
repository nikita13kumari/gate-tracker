import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subjects: [],
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
  },
});

export const { setSubjects } = progressSlice.actions;
export default progressSlice.reducer;

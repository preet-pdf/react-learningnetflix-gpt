import React from 'react'
import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTScreen: false,
    movieNames: null,
    movieSuggestions: null,
  },
  reducers: {
      toggleGPTView: (state) => {
          state.showGPTScreen = !state.showGPTScreen
      },
      addGptSeacrhedMovie: (state, action) => {
        const {movieName, movieSuggestions} = action.payload;

        state.movieNames = movieName;
        state.movieSuggestions = movieSuggestions;
      }

  }
})

export const {toggleGPTView, addGptSeacrhedMovie} = gptSlice.actions;
export default gptSlice.reducer;
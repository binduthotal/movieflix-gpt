import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearchPage: false,
        movieResults:null,
        movieNames:null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearchPage = !state.showGptSearchPage;
        },
        addGptMovieResults: (state,action) => {
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearGptMovieResults: (state,action) => {
            state.movieNames = null;
            state.movieResults = null;
        }
    },
});
export const { toggleGptSearchView, addGptMovieResults, clearGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    topRated: null,
    upComing: null,
    popular: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upComing = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRated = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTopRatedMovie,
  addUpcomingMovie,
  addPopularMovie,
} = movieSlice.actions;
export default movieSlice.reducer;

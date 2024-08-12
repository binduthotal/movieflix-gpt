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
    clearMovieLists: (state, action) => {
      state.nowPlayingMovies = null;
      state.trailerVideo = null;
      state.upComing = null;
      state.topRated = null;
      state.popular = null;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTopRatedMovie,
  addUpcomingMovie,
  addPopularMovie,
  clearMovieLists
} = movieSlice.actions;
export default movieSlice.reducer;

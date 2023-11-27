import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } =
  moviesSlice.actions;

export const getNowPlayingMovies = (state) => state.movies.nowPlayingMovies;

export const getPopularMovies = (state) => state.movies.popularMovies;

export const getUpcomingMovies = (state) => state.movies.upcomingMovies;

export const getTopRatedMovies = (state) => state.movies.topRatedMovies;

export const getMainTrailerVideo = (state) => state.movies.trailerVideo;

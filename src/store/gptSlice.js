import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showGPTSearch: false,
  loading: false,
  gptResult: null,
  gptMovies: null,
};

const gptSlice = createSlice({
  name: 'gpt',
  initialState,
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResults: (state, action) => {
      state.gptMovies = action.payload.movies;
      state.gptResult = action.payload.resultText;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResults, setLoading } = gptSlice.actions;

export default gptSlice.reducer;

export const getGPTSearchView = (state) => state.gpt.showGPTSearch;

export const getGPTLoadingState = (state) => state.gpt.loading;

export const getGPTMoviesNames = (state) => state.gpt.gptResult;

export const getGPTMoviesData = (state) => state.gpt.gptMovies;

export const NETFLIX_BG_IMG_URL =
  'https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const DEFAULT_USER_IMG = 'https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

export const NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?page=1';

export const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?page=1';

export const TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?page=1';

export const NOW_PLAYING_MAIN_MOVIE_VIDEO_URL = (id) => `https://api.themoviedb.org/3/movie/${id}/videos`;

export const MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/w780';

export const NETFLIX_GPT_OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const OPENAI_MODEL = 'gpt-3.5-turbo';

export const getOpenAIContext = (searchText) =>
  `Act as a movie recommendation system and suggest some movies for the query : ${searchText}. Only give me names of 5 movies, comma separated format like the example given ahead. Example - Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

export const SEARCH_MOVIE_URL = (movie) =>
  `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-IN&page=1`;

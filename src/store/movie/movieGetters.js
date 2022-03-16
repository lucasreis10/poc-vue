export const MOVIE_GETTERS = {
  GET_MOVIES: 'GET_MOVIES',
  GET_MOVIE: 'GET_MOVIE',
};

export default {

  [MOVIE_GETTERS.GET_MOVIES](state) {
    return state.movies;
  },

  [MOVIE_GETTERS.GET_MOVIE](state) {
    return state.movie;
  },

};

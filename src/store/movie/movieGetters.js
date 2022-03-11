export const MOVIE_GETTERS = {
  GET_MOVIES: 'GET_MOVIES',
};

export default {

  [MOVIE_GETTERS.GET_MOVIES](state) {
    return state.movies;
  },

};

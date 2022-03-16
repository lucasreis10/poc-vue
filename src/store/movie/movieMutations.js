export const MOVIE_MUTATIONS = {
  UPDATE_MOVIE: 'UPDATE_MOVIE',
  UPDATE_MOVIES: 'UPDATE_MOVIES',
};

export default {

  [MOVIE_MUTATIONS.UPDATE_MOVIES](state, payload) {
    state.movies = payload;
  },

  [MOVIE_MUTATIONS.UPDATE_MOVIE](state, payload) {
    state.movie = payload;
  },

};

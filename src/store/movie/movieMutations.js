export const MOVIE_MUTATIONS = {
  UPDATE_MOVIES: 'UPDATE_MOVIES',
};

export default {

  [MOVIE_MUTATIONS.UPDATE_MOVIES](state, payload) {
    state.movies = payload;
  },

};

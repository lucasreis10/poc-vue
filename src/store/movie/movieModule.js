import actions from './movieActions';
import getters from './movieGetters';
import mutations from './movieMutations';

export const MOVIE_MODULE = 'MOVIE_MODULE';

const state = {
  movies: [],
  movie: {},
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};

import Vue from 'vue';
import Vuex from 'vuex';
import movieModule, { MOVIE_MODULE } from '@/store/movie/movieModule';
import snackbarModule, { SNACKBAR_MODULE } from '@/store/snackbar/snackbarModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [MOVIE_MODULE]: movieModule,
    [SNACKBAR_MODULE]: snackbarModule,
  },
});

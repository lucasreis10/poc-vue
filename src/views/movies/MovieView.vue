<template>
  <div>
    <data-table-movie
      :movies="movies"
      :delete-movie="deleteMovie"
      :edit-movie="editMovie"
    />
    <v-btn
      data-test-movie="btn-new-movie"
      class="mx-2"
      fab
      @click="createNewMovie">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>

import DataTableMovie from '@/components/movie/DataTableMovie.vue';
import { MOVIE_MODULE } from '@/store/movie/movieModule';
import { MOVIE_ACTIONS } from '@/store/movie/movieActions';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { MOVIE_GETTERS } from '@/store/movie/movieGetters';
import notificationMixin from '@/mixin/util/notificationMixin';
import { MOVIE_MUTATIONS } from '@/store/movie/movieMutations';

export default {
  name: 'MovieView',
  components: { DataTableMovie },

  mixins: [
    notificationMixin,
  ],

  mounted() {
    this.loadViewModel();
  },

  computed: {
    ...mapGetters(MOVIE_MODULE, {
      movies: MOVIE_GETTERS.GET_MOVIES,
    }),
  },

  methods: {
    ...mapActions(MOVIE_MODULE, {
      findAllMovies: MOVIE_ACTIONS.FIND_ALL_MOVIES,
      deleteMovieAction: MOVIE_ACTIONS.DELETE_MOVIE,
    }),
    ...mapMutations(MOVIE_MODULE, {
      setMovie: MOVIE_MUTATIONS.UPDATE_MOVIE,
    }),

    loadViewModel() {
      try {
        this.findAllMovies();
      } catch (error) {
        console.log('Error find all movies');
        throw error;
      }
    },

    createNewMovie() {
      this.$router.push({ path: '/movies' });
    },

    editMovie(movie) {
      this.setMovie(movie);
      this.$router.push({ path: `/movies/${movie.id}` });
    },

    async deleteMovie(id) {
      try {
        await this.deleteMovieAction(id);
        this.showSuccesMessage('Successfully deleted movie.');
        this.loadViewModel();
      } catch (error) {
        console.error(error);
        this.showErrorMessage('Error deleting movie.');
      }
    },
  },
};
</script>

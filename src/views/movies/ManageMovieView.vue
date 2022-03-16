<template>
  <v-flex class="pa-2" fill-height fluid>
    <form-movie
      :save="save"
      :cancel="cancel"
      :movie="movieModel"
    />
  </v-flex>
</template>

<script>
import FormMovie from '@/components/movie/FormMovie.vue';
import { mapActions, mapState } from 'vuex';
import { MOVIE_MODULE } from '@/store/movie/movieModule';
import { MOVIE_ACTIONS } from '@/store/movie/movieActions';
import notificationMixin from '@/mixin/util/notificationMixin';

export default {
  name: 'ManageMovieView',

  data() {
    return {
      movieId: null,
    };
  },

  components: {
    FormMovie,
  },

  mixins: [
    notificationMixin,
  ],

  mounted() {
    this.movieId = this.$route.params.id;
  },

  computed: {
    ...mapState(MOVIE_MODULE, {
      movieModel: (state) => state.movie,
    }),
  },

  methods: {
    ...mapActions(MOVIE_MODULE, {
      createMovie: MOVIE_ACTIONS.CREATE_MOVIE,
      updateMovie: MOVIE_ACTIONS.UPDATE_MOVIE,
      findAllMovies: MOVIE_ACTIONS.FIND_ALL_MOVIES,
    }),

    cancel() {
      this.$router.push({ path: '/' });
    },

    save(movie) {
      return this.movieId ? this.update(movie) : this.create(movie);
    },

    async create(movie) {
      try {
        await this.createMovie(movie);
        this.cancel();
        this.showSuccesMessage('Movie created successfully.');
      } catch (error) {
        console.error(error);
        this.showErrorMessage('Error creating movie.');
      }
    },

    async update(movie) {
      try {
        await this.updateMovie([this.movieId, movie]);
        this.cancel();
        this.showSuccesMessage('Movie updated successfully.');
      } catch (error) {
        console.error(error);
        this.showErrorMessage('Error updating movie.');
      }
    },
  },

};
</script>

<style scoped>

</style>

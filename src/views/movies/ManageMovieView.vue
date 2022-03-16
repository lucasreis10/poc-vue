<template>
  <v-flex class="pa-2" fill-height fluid>
    <form-movie :save="save" :cancel="cancel" />
  </v-flex>
</template>

<script>
import FormMovie from '@/components/movie/FormMovie.vue';
import { mapActions } from 'vuex';
import { MOVIE_MODULE } from '@/store/movie/movieModule';
import { MOVIE_ACTIONS } from '@/store/movie/movieActions';
import notificationMixin from '@/mixin/util/notificationMixin';

export default {
  name: 'ManageMovieView',

  components: {
    FormMovie,
  },

  mixins: [
    notificationMixin,
  ],

  methods: {
    ...mapActions(MOVIE_MODULE, {
      createMovie: MOVIE_ACTIONS.CREATE_MOVIE,
    }),

    cancel() {
      this.$router.push({ path: '/' });
    },

    async save(movie) {
      try {
        await this.createMovie(movie);
        this.cancel();
        this.showSuccesMessage('Movie created successfully.');
      } catch (error) {
        console.error(error);
        this.showErrorMessage('Error creating movie.');
      }
    },
  },

};
</script>

<style scoped>

</style>

<template>
  <v-card class="d-flex justify-center">
    <v-form v-model="valid">
      <v-container>
        <v-row justify="space-between">
          <v-col >
            <v-text-field
              v-model="movieModel.name"
              :rules="nameRules"
              label="Movie name"
              required
              data-test-form-movie="input-name"
            ></v-text-field>
          </v-col>

          <v-col >
            <v-text-field
              v-model="movieModel.genre"
              label="Genre"
              required
              data-test-form-movie="input-genre"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col >
            <v-text-field
              v-model="movieModel.year"
              label="Year"
              type="number"
              data-test-form-movie="input-year"
            ></v-text-field>
          </v-col>

          <v-col>
            <v-text-field
              v-model="movieModel.imdbRating"
              label="Imdb Rating"
              type="number"
              data-test-form-movie="input-imdb-rating"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field
              v-model="movieModel.duration"
              label="Duration"
              data-test-form-movie="input-duration"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        data-test-form-movie="btn-save"
        @click="save(movieModel)"
      >
        Save
      </v-btn>
      <v-btn
        data-test-form-movie="btn-cancel"
        @click="cancel"
      >
        Cancel
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'FormMovie',

  props: {
    save: {
      type: Function,
      required: true,
    },

    cancel: {
      type: Function,
      required: true,
    },

    movie: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      movieModel: { ...this.movie },
      valid: false,
      nameRules: [
        (v) => !!v || 'Field is required',
      ],
      email: '',
    };
  },
};
</script>

<style scoped>

</style>

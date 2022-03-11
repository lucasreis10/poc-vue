<template>
  <div>
    <v-snackbar
      data-test-snackbar="wrapper"
      :value="haveMessage"
      :color="message.color"
      top
      :timeout="-1"
    >
      <p data-test-snackbar="text-message">{{ message.text }}</p>

    <v-btn
      id="btnCloseMessage"
      data-test-snackbar="btn-close-message"
      text
      @click="closeMessage"
    >
      {{ message.textButton }}
    </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { SNACKBAR_MODULE } from '@/store/snackbar/snackbarModule';
import { SNACKBAR_GETTERS } from '@/store/snackbar/snackbarGetters';
import { SNACKBAR_MUTATIONS } from '@/store/snackbar/snackbarMutations';
import { mapGetters, mapMutations } from 'vuex';

export default {

  computed: {
    ...mapGetters(SNACKBAR_MODULE, {
      haveMessage: SNACKBAR_GETTERS.HAVE_MESSAGE,
      message: SNACKBAR_GETTERS.MESSAGE,
    }),
  },

  methods: {
    ...mapMutations(SNACKBAR_MODULE, {
      closeMessage: SNACKBAR_MUTATIONS.HIDE_MESSAGE,
    }),
  },

};
</script>

<style scoped>

</style>

import { mapMutations } from 'vuex';
import { SNACKBAR_MODULE } from '@/store/snackbar/snackbarModule';
import { SNACKBAR_MUTATIONS } from '@/store/snackbar/snackbarMutations';

export default {
  methods: {
    ...mapMutations(SNACKBAR_MODULE, {
      showSuccesMessage: SNACKBAR_MUTATIONS.SHOW_SUCCESS_MESSAGE,
      showErrorMessage: SNACKBAR_MUTATIONS.SHOW_ERROR_MESSAGE,
      hideMessage: SNACKBAR_MUTATIONS.HIDE_MESSAGE,
    }),
  },
};

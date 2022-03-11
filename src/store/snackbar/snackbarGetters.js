export const SNACKBAR_GETTERS = {
  HAVE_MESSAGE: 'HAVE_MESSAGE',
  MESSAGE: 'MESSAGE',
};

export default {

  [SNACKBAR_GETTERS.HAVE_MESSAGE](state) {
    return state.snackbar;
  },

  [SNACKBAR_GETTERS.MESSAGE](state) {
    return state.message;
  },

};

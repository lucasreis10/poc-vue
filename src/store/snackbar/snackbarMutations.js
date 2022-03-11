export const SNACKBAR_MUTATIONS = {
  SHOW_SUCCESS_MESSAGE: 'SHOW_SUCCESS_MESSAGE',
  SHOW_ERROR_MESSAGE: 'SHOW_ERROR_MESSAGE',
  HIDE_MESSAGE: 'HIDE_MESSAGE',
};

export default {

  [SNACKBAR_MUTATIONS.SHOW_SUCCESS_MESSAGE](state, payload) {
    state.snackbar = true;
    state.message = { text: payload, color: '#4CAF50', textButton: 'Ok' };
  },

  [SNACKBAR_MUTATIONS.SHOW_ERROR_MESSAGE](state, payload) {
    state.snackbar = true;
    state.message = { text: payload, color: '#FF5252', textButton: 'Ok' };
  },

  [SNACKBAR_MUTATIONS.HIDE_MESSAGE](state) {
    state.snackbar = false;
  },

};

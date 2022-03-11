import getters from './snackbarGetters';
import mutations from './snackbarMutations';

export const SNACKBAR_MODULE = 'SNACKBAR_MODULE';

const state = {
  snackbar: false,
  message: {
    text: '',
    color: '#FFC107',
    textButton: 'Ok',
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};

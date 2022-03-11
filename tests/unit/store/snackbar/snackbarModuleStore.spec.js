import { SNACKBAR_MODULE } from '@/store/snackbar/snackbarModule';
import { SNACKBAR_MUTATIONS } from '@/store/snackbar/snackbarMutations';
import { SNACKBAR_GETTERS } from '@/store/snackbar/snackbarGetters';
import { storeSnackbar } from './SnackbarStoreTestHelper';

describe('snackbarStore', () => {
  describe('SNACKBAR_MUTATIONS', () => {
    it('SHOW_SUCCESS_MESSAGE', () => {
      // setup:
      const store = storeSnackbar();
      const text = 'Sucess';
      // execute:
      store.commit(`${SNACKBAR_MODULE}/${SNACKBAR_MUTATIONS.SHOW_SUCCESS_MESSAGE}`, text);
      const message = store.getters[`${SNACKBAR_MODULE}/${SNACKBAR_GETTERS.MESSAGE}`];
      // verify:
      expect(message.text).toBe(text);
      expect(message.color).toBe('#4CAF50');
      expect(message.textButton).toBe('Ok');
    });

    it('SHOW_ERROR_MESSAGE', () => {
      // setup:
      const store = storeSnackbar();
      const text = 'Error';
      // execute:
      store.commit(`${SNACKBAR_MODULE}/${SNACKBAR_MUTATIONS.SHOW_ERROR_MESSAGE}`, text);
      const message = store.getters[`${SNACKBAR_MODULE}/${SNACKBAR_GETTERS.MESSAGE}`];
      // verify:
      expect(message.text).toBe(text);
      expect(message.color).toBe('#FF5252');
      expect(message.textButton).toBe('Ok');
    });
  });

  describe('SNACKBAR_GETTERS', () => {
    describe('HAVE_MESSAGE', () => {
      it('Returns true when a message is displayed', () => {
        // setup:
        const store = storeSnackbar();
        // execute:
        store.commit(`${SNACKBAR_MODULE}/${SNACKBAR_MUTATIONS.SHOW_SUCCESS_MESSAGE}`, '');
        const isHaveMessage = store.getters[`${SNACKBAR_MODULE}/${SNACKBAR_GETTERS.HAVE_MESSAGE}`];
        // verify:
        expect(isHaveMessage).toBeTruthy();
      });

      it('Returns false when a message is displayed and then removed', () => {
        // setup:
        // setup:
        const store = storeSnackbar();
        // execute:
        store.commit(`${SNACKBAR_MODULE}/${SNACKBAR_MUTATIONS.SHOW_SUCCESS_MESSAGE}`, '');
        store.commit(`${SNACKBAR_MODULE}/${SNACKBAR_MUTATIONS.HIDE_MESSAGE}`);
        const isHaveMessage = store.getters[`${SNACKBAR_MODULE}/${SNACKBAR_GETTERS.HAVE_MESSAGE}`];
        // verify:
        expect(isHaveMessage).toBeFalsy();
      });
    });
  });
});

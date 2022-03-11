import { createLocalVue, mount } from '@vue/test-utils';
import SnackbarNotification from '@/components/util/SnackbarNotification.vue';
import Vuetify from 'vuetify';
import { SNACKBAR_MODULE } from '@/store/snackbar/snackbarModule';
import { SNACKBAR_MUTATIONS } from '@/store/snackbar/snackbarMutations';
import { SNACKBAR_GETTERS } from '@/store/snackbar/snackbarGetters';
import { storeSnackbar, defaultStateSnackbar } from '../../store/snackbar/SnackbarStoreTestHelper';

describe('SnackNotification.vue', () => {
  let vuetify;
  const store = storeSnackbar(defaultStateSnackbar);
  const localVue = createLocalVue();

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('Display success type message', async () => {
    // setup:
    const textMessage = 'Success message';
    const wrapper = mount(SnackbarNotification, { localVue, store, vuetify });
    // execute:
    await store.commit(`${SNACKBAR_MODULE}/${SNACKBAR_MUTATIONS.SHOW_SUCCESS_MESSAGE}`, textMessage);
    const paragraphTextMessage = wrapper.find('[data-test-snackbar="text-message"]');
    const vSnackbar = wrapper.find('[data-test-snackbar="wrapper"]');
    // setup:
    expect(paragraphTextMessage.text()).toBe(textMessage);
    expect(vSnackbar.attributes().color).toBe('#4CAF50');
  });

  it('Display error type message', async () => {
    // setup:
    const textMessage = 'Error message';
    const wrapper = mount(SnackbarNotification, { localVue, store, vuetify });
    // execute:
    await store.commit(`${SNACKBAR_MODULE}/${SNACKBAR_MUTATIONS.SHOW_ERROR_MESSAGE}`, textMessage);
    const paragraphTextMessage = wrapper.find('[data-test-snackbar="text-message"]');
    const vSnackbar = wrapper.find('[data-test-snackbar="wrapper"]');
    // setup:
    expect(paragraphTextMessage.text()).toBe(textMessage);
    expect(vSnackbar.attributes().color).toBe('#FF5252');
  });

  it('Close snackbar clicking the button', async () => {
    // setup:
    const textMessage = 'Error message';
    const wrapper = mount(SnackbarNotification, { localVue, store, vuetify });
    // execute:
    await store.commit(`${SNACKBAR_MODULE}/${SNACKBAR_MUTATIONS.SHOW_ERROR_MESSAGE}`, textMessage);
    await wrapper.find('[data-test-snackbar="btn-close-message"]').trigger('click');
    const isHaveMessage = store.getters[`${SNACKBAR_MODULE}/${SNACKBAR_GETTERS.HAVE_MESSAGE}`];
    // verify:
    expect(isHaveMessage).toBeFalsy();
  });
});

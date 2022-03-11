import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { apolloProvider } from '@/infra/graphql/apollo-client';
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import router from './router/router';
import store from './store/store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.use(VueApollo);

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render(h) { return h(App); },
}).$mount('#app');

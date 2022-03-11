import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieView from '@/views/movies/MovieView.vue';
import ManageMovieView from '@/views/movies/ManageMovieView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'movie',
    component: MovieView,
  },
  {
    path: '/movies',
    name: 'create new movie',
    component: ManageMovieView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

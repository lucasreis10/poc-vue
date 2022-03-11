import Vue from 'vue';
import Vuex from 'vuex';
import movieModule, { MOVIE_MODULE } from '@/store/movie/movieModule';

export function storeMovie(state) {
  Vue.use(Vuex);
  return new Vuex.Store({
    modules: {
      [MOVIE_MODULE]: {
        ...movieModule,
        state,
      },
    },
  });
}

export const mockQueryResponse = {
  data: {
    movies: [
      {
        id: '1',
        name: 'Interestelar',
        year: 2014,
        genre: 'Sci-Fi',
        duration: '2h 49m',
        imdbRating: 8.7,
      },
      {
        id: '2',
        name: 'Dune',
        year: 2021,
        genre: 'Adventure',
        duration: '2h 35m',
        imdbRating: 8.1,
      },
      {
        id: '3',
        name: 'Fight Club',
        year: 1999,
        genre: 'Drama',
        duration: '2h 19m',
        imdbRating: 8.8,
      },
      {
        id: '4',
        name: 'Forrest Gump',
        year: 1994,
        genre: 'Drama',
        duration: '2h 22m',
        imdbRating: 8.8,
      },
      {
        id: '5',
        name: 'The Curious Case of Benjamin Button',
        year: 2008,
        genre: 'Drama',
        duration: '2h 46m',
        imdbRating: 7.8,
      },
      {
        id: '6',
        name: 'Gone Girl',
        year: 2014,
        genre: 'Drama',
        duration: '2h 29m',
        imdbRating: 8.1,
      },
    ],
  },
};

export const mockMutateResponse = {
  data: {
    createMovie: {
      id: 'f04db06a-ea5a-473b-805a-3bcfd1ec73c9',
      name: 'The Batman',
      imdbRating: 8.5,
      duration: '2h 56m',
      genre: 'Action',
      year: 2022,
    },
  },
};

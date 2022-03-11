import { MOVIE_MODULE } from '@/store/movie/movieModule';
import { MOVIE_ACTIONS } from '@/store/movie/movieActions';
import { MOVIE_GETTERS } from '@/store/movie/movieGetters';
import { apolloClient } from '@/infra/graphql/apollo-client';
import util from '@/util/util';
import { storeMovie, mockMutateResponse, mockQueryResponse } from './MovieStoreTestHelper';
import MovieTestHelper from '../../test-helper/movie/MovieTestHelper';

jest.spyOn(apolloClient, 'query').mockImplementation(() => Promise.resolve(mockQueryResponse));
jest.spyOn(apolloClient, 'mutate').mockImplementation(() => Promise.resolve(mockMutateResponse));

describe('movieStore', () => {
  it('MOVIE_ACTIONS.FIND_ALL_MOVIES', async () => {
    // setup:
    const store = storeMovie();
    // execute:
    await store.dispatch(`${MOVIE_MODULE}/${MOVIE_ACTIONS.FIND_ALL_MOVIES}`);
    const movies = store.getters[`${MOVIE_MODULE}/${MOVIE_GETTERS.GET_MOVIES}`];
    // verify:
    expect(Array.isArray(movies)).toBeTruthy();
    expect(movies.length > 0).toBeTruthy();
    expect(util.isString(movies[0].id)).toBeTruthy();
    expect(util.isString(movies[0].duration)).toBeTruthy();
  });

  it('MOVIE_ACTIONS.CREATE_MOVIE', async () => {
    // setup:
    const idNewMovie = 'f04db06a-ea5a-473b-805a-3bcfd1ec73c9';
    const movie = MovieTestHelper.movie();
    const store = storeMovie();
    // execute:
    const { data: newMovie } = await store.dispatch(`${MOVIE_MODULE}/${MOVIE_ACTIONS.CREATE_MOVIE}`, movie);
    // verify:
    expect(newMovie.createMovie.id).toBe(idNewMovie);
  });
});

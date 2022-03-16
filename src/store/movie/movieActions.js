import movieQueries from '@/graphql/movie/movieQueries';
import { MOVIE_MUTATIONS } from '@/store/movie/movieMutations';
import { apolloClient } from '@/infra/graphql/apollo-client';
import movieMutations from '@/graphql/movie/movieMutations';
import MovieBuilder from '@/util/movie/MovieBuilder';

export const MOVIE_ACTIONS = {
  FIND_ALL_MOVIES: 'FIND_ALL_MOVIES',
  CREATE_MOVIE: 'CREATE_MOVIE',
  DELETE_MOVIE: 'DELETE_MOVIE',
  UPDATE_MOVIE: 'UPDATE_MOVIE',
};

export default {

  async [MOVIE_ACTIONS.FIND_ALL_MOVIES](context) {
    const { data } = await apolloClient.query({ query: movieQueries.GET_ALL_MOVIES_QUERY });

    context.commit(MOVIE_MUTATIONS.UPDATE_MOVIES, data.movies);
  },

  async [MOVIE_ACTIONS.CREATE_MOVIE](context, payload) {
    const movie = new MovieBuilder(payload)
      .setImdbRating(payload.imdbRating)
      .setYear(payload.year)
      .build();

    return apolloClient.mutate({
      mutation: movieMutations.CREATE_MOVIE,
      variables: { input: { ...movie } },
    });
  },

  async [MOVIE_ACTIONS.DELETE_MOVIE](context, id) {
    return apolloClient.mutate({
      mutation: movieMutations.DELETE_MOVIE,
      variables: { deleteMovieId: id },
    });
  },

  async [MOVIE_ACTIONS.UPDATE_MOVIE](context, [id, payload]) {
    const movie = new MovieBuilder(payload)
      .setImdbRating(payload.imdbRating)
      .setYear(payload.year)
      .withoutId()
      .withoutTypename()
      .build();

    return apolloClient.mutate({
      mutation: movieMutations.UPDATE_MOVIE,
      variables: { updateMovieId: id, input: { ...movie } },
    });
  },

};

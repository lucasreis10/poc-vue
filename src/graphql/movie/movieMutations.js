import { gql } from 'apollo-boost';

export default {

  CREATE_MOVIE: gql`
    mutation($input: CreateMovieInput!) {
      createMovie(input: $input) {
        id
        name
        imdbRating
        duration
        genre
        year
      }
    }
    `,

  UPDATE_MOVIE: gql`
    mutation($updateMovieId: ID!, $input: UpdateMovieInput!) {
      updateMovie(id: $updateMovieId, input: $input) {
        id
        name
        imdbRating
        duration
        genre
        year
      }
    }
  `,

  DELETE_MOVIE: gql`
    mutation($deleteMovieId: ID!) {
      deleteMovie(id: $deleteMovieId)
    }
  `,
};

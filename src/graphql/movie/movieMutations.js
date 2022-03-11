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
};

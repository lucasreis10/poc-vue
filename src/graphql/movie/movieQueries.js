import { gql } from 'apollo-boost';

export default {

  GET_ALL_MOVIES_QUERY: gql`
    query movies {
      movies {
        id
        name
        year
        genre
        duration
        imdbRating
      }
    }
  `,

};

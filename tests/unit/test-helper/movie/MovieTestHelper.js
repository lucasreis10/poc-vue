export default {

  movie(
    name = 'No Time to Die',
    genre = 'Action',
    year = 2021,
    imdbRating = 7.3,
    duration = '2h 43m',
  ) {
    return {
      name,
      genre,
      year,
      imdbRating,
      duration,
    };
  },

  movieRequestGraphql(
    id = '32',
    name = 'No Time to Die',
    genre = 'Action',
    year = 2021,
    imdbRating = 7.3,
    duration = '2h 43m',
    __typename = 'Movie',
  ) {
    return {
      id,
      name,
      genre,
      year,
      imdbRating,
      duration,
      __typename,
    };
  },

};

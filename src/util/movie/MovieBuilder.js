import util from '@/util/util';

export default class MovieBuilder {
  constructor(movie) {
    this.newMovie = movie;
  }

  setImdbRating(imdbRating) {
    this.newMovie.imdbRating = util.isNumber(imdbRating)
      ? imdbRating
      : util.convertStringToNumber(imdbRating);

    return this;
  }

  setYear(year) {
    this.newMovie.year = util.isNumber(year)
      ? year
      : util.convertStringToNumber(year);

    return this;
  }

  withoutId() {
    delete this.newMovie.id;
    return this;
  }

  withoutTypename() {
    // eslint-disable-next-line no-underscore-dangle
    delete this.newMovie.__typename;
    return this;
  }

  build() {
    return { ...this.newMovie };
  }
}

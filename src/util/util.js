export default {
  convertStringToNumber(str) {
    if (this.isString(str)) {
      return +str;
    }
    throw new Error('You must provide a string.');
  },

  isString(str) {
    return str && typeof str === 'string';
  },

  isNumber(number) {
    return number && typeof number === 'number';
  },
};

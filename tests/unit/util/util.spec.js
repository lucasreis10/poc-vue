import util from '@/util/util';

describe('util', () => {
  describe('convertStringToNumber', () => {
    it('Convert a valid param string to number', () => {
      // setup:
      const param = '2032';
      // execute:
      const newNumber = util.convertStringToNumber(param);
      // verify:
      expect(typeof newNumber === 'number').toBeTruthy();
      expect(newNumber).toBe(2032);
    });

    it('Pass invalid parameter returns exception', () => {
      // setup:
      const param = true;
      let exception;
      // execute:
      try {
        util.convertStringToNumber(param);
      } catch (err) {
        exception = err;
      }
      // verify:
      expect(exception.message).toBe('You must provide a string.');
    });

    it('Pass not a number parameter and returns NaN', () => {
      // setup:
      const str = 'abc';
      // execute:
      const notANumber = util.convertStringToNumber(str);
      // verify:
      expect(notANumber).toBe(NaN);
    });
  });

  describe('isString', () => {
    it('Check a string type parameter -> true', () => {
      // setup:
      const validString = 'abcd';
      // execute:
      const isString = util.isString(validString);
      // verify:
      expect(isString).toBeTruthy();
    });

    it('Check a null type parameter -> false ', () => {
      // setup:
      const nullParameter = null;
      // execute:
      const isString = util.isString(nullParameter);
      // verify:
      expect(isString).toBeFalsy();
    });

    it('Check a undefined type parameter -> false ', () => {
      // setup:
      const undefinedParameter = undefined;
      // execute:
      const isString = util.isString(undefinedParameter);
      // verify:
      expect(isString).toBeFalsy();
    });
  });

  describe('isNumber', () => {
    it('check a number type parameter -> true', () => {
      // setup:
      const validNumber = 123.0;
      // execute:
      const isString = util.isNumber(validNumber);
      // verify:
      expect(isString).toBeTruthy();
    });

    it('check a null type parameter -> false ', () => {
      // setup:
      const nullParameter = null;
      // execute:
      const isString = util.isNumber(nullParameter);
      // verify:
      expect(isString).toBeFalsy();
    });

    it('check a undefined type parameter -> false ', () => {
      // setup:
      const undefinedParameter = undefined;
      // execute:
      const isString = util.isNumber(undefinedParameter);
      // verify:
      expect(isString).toBeFalsy();
    });
  });
});

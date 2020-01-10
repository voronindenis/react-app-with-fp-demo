import { noop } from 'lodash';
import { maybe } from '../maybe';

describe('meybe test', () => {
  describe('curry tests', () => {
    it('should return Function', () => {
      expect(maybe(1)).toBeInstanceOf(Function);
    });
    it('should return Function', () => {
      expect(maybe(1, noop)).toBeInstanceOf(Function);
    });
  });
  describe('execution tests', () => {
    it('should return 1', () => {
      expect(maybe(1, (n) => n * 2)(null)).toEqual(1);
    });
    it('should return 4', () => {
      expect(maybe(1, (n) => n * 2)(2)).toEqual(4);
    });
  });
});

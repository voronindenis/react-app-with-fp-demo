import { noop } from 'lodash';
import { either } from '../either';

describe('either test', () => {
  describe('curry tests', () => {
    it('should return Function', () => {
      expect(either(true)).toBeInstanceOf(Function);
    });
    it('should return Function', () => {
      expect(either(true, noop)).toBeInstanceOf(Function);
    });
    it('should return Function', () => {
      expect(either(true)(noop)).toBeInstanceOf(Function);
    });
    it('should return Function', () => {
      expect(either(true, noop, noop)).toBeInstanceOf(Function);
    });
    it('should return Function', () => {
      expect(either(true, noop)(noop)).toBeInstanceOf(Function);
    });
    it('should return Function', () => {
      expect(either(true)(noop)(noop)).toBeInstanceOf(Function);
    });
  });
  describe('execution tests', () => {
    it('should return 6', () => {
      expect(either(true, (n) => n * 2, (n) => n * 3)(2)).toEqual(6);
    });
    it('should return 4', () => {
      expect(either(false, (n) => n * 2, (n) => n * 3)(2)).toEqual(4);
    });
  });
});

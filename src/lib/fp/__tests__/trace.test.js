import { trace } from '../trace';

describe('trace test', () => {
  describe('curry tests', () => {
    it('should return Function', () => {
      expect(trace('tag')).toBeInstanceOf(Function);
    });
  });
  describe('execution tests', () => {
    it('should log "one 1" and return 1', () => {
      expect(trace('one', 1)).toEqual(1);
    });
  });
});

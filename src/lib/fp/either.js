// @flow
import { curryN } from 'lodash/fp';

export const either = curryN(4, (c: boolean, f: Function, g: Function, e: any) => {
  if (!c) {
    return f(e);
  }
  return g(e);
});

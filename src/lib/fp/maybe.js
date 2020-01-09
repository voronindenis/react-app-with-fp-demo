// @flow
import { curryN } from './lodash';

export const maybe = curryN(3, (v: any, f: Function, m: any) => {
  if (m == null) {
    return v;
  }
  return f(m);
});

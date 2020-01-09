// @flow
import { curryN } from './lodash';

export const trace = curryN(2, (tag, x) => {
  console.log(tag, x);
  return x;
});

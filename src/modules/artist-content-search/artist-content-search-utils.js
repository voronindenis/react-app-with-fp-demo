// @flow
import {
  compose, curryN, fpGet, maybe,
} from 'lib/fp';
import { DIRECTIONS_ENUM } from './artist-content-search-constants';

export const setNavURL = curryN(3, (direction: string, action: TAction<string, {}>, data: TDeezerSearchResponseDTO) => {
  if (direction === DIRECTIONS_ENUM.PREV) {
    compose(maybe(null, action), fpGet('prev'))(data);
  }
  if (direction === DIRECTIONS_ENUM.NEXT) {
    compose(maybe(null, action), fpGet('next'))(data);
  }
  return data;
});

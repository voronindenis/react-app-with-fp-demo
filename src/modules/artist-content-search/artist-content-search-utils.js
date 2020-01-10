// @flow
import { compose, curryN, fpGet } from 'lib/fp';
import { DIRECTIONS_ENUM } from './artist-content-search-constants';

export const setNavURL = curryN(3,
  (direction: string, action: (payload: ?string) => TAction<?string, {}>, data: TDeezerSearchResponseDTO) => {
    if (direction === DIRECTIONS_ENUM.PREV) {
      compose(action, fpGet('prev'))(data);
    }
    if (direction === DIRECTIONS_ENUM.NEXT) {
      compose(action, fpGet('next'))(data);
    }
    return data;
  });

export const checkSearchError = (data: TDeezerSearchResponseDTO) => {
  const searchError = fpGet('error')(data);
  if (searchError) {
    throw new Error(searchError.message);
  }
  return data;
};

// @flow
import { createSelector } from 'reselect';
import type { InputSelector } from 'reselect';
import { fpGet, memoize } from 'lib/fp';
import { ARTIST_SEARCH_STORE_KEY } from './artist-search-constants';

const getArtistSearchState: (state: TApplicationState, props: Object) => TArtistSearchState = fpGet(ARTIST_SEARCH_STORE_KEY);

export const getArtistContentSelectorUtil: InputSelector<
  TApplicationState, Object, (filter: Function) => Object
> = createSelector(
  getArtistSearchState,
  (artistSearchState: TArtistSearchState) => memoize((filter: Function) => filter(artistSearchState))
);

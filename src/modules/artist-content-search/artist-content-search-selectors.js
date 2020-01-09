// @flow
import { createSelector } from 'reselect';
import type { InputSelector } from 'reselect';
import { compose, fpGet, memoize } from 'lib/fp';
import { ARTIST_CONTENT_SEARCH_STORE_KEY } from './artist-content-search-constants';

const getArtistSearchState: (state: TApplicationState, props: Object) => TArtistSearchState = fpGet(
  ARTIST_CONTENT_SEARCH_STORE_KEY,
);

export const getArtistContentSelectorUtil: InputSelector<
  TApplicationState, Object, TArtistContentSelectorUtilResult
> = createSelector(
  getArtistSearchState,
  (artistSearchState: TArtistSearchState) => memoize((mapper: TArtistContentMapFunction) => compose(
    mapper,
    fpGet('artistContent'),
  )(artistSearchState))
);

export const getPrevArtistContentUrl: InputSelector<TApplicationState, Object, string> = createSelector(
  getArtistSearchState,
  fpGet('prevArtistContentURL'),
);

export const getNextArtistContentUrl: InputSelector<TApplicationState, Object, string> = createSelector(
  getArtistSearchState,
  fpGet('nextArtistContentURL'),
);

export const getPrevButtonEnabledStatus: InputSelector<TApplicationState, Object, boolean> = createSelector(
  getPrevArtistContentUrl,
  Boolean,
);

export const getNextButtonEnabledStatus: InputSelector<TApplicationState, Object, boolean> = createSelector(
  getNextArtistContentUrl,
  Boolean,
);

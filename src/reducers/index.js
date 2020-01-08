// @flow
import { combineReducers } from 'redux';
import { ARTIST_SEARCH_STORE_KEY, artistSearchReducer } from 'modules/artist-search';

type TRootReducer = {
  'ARTIST_SEARCH': Function,
};

export const rootReducer = combineReducers<TRootReducer, TAction<Object, Object>>({
  [ARTIST_SEARCH_STORE_KEY]: artistSearchReducer,
});

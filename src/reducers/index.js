// @flow
import { combineReducers } from 'redux';
import { ARTIST_CONTENT_SEARCH_STORE_KEY, artistContentSearchReducer } from 'modules/artist-content-search';

type TRootReducer = {
  'ARTIST_CONTENT_SEARCH': Function,
};

export const rootReducer = combineReducers<TRootReducer, TAction<Object, Object>>({
  [ARTIST_CONTENT_SEARCH_STORE_KEY]: artistContentSearchReducer,
});

// @flow
import {
  SET_ARTIST_CONTENT, SET_ARTIST_NEXT_CONTENT_URL, SET_ARTIST_PREV_CONTENT_URL,
} from './artist-content-search-actions';

const INITIAL_STATE = {};

export const artistContentSearchReducer = (
  state: Object = INITIAL_STATE, action: TAction<any, any>,
) => {
  switch (action.type) {
    case SET_ARTIST_CONTENT:
      return {
        ...state,
        artistContent: action.payload,
      };
    case SET_ARTIST_NEXT_CONTENT_URL:
      return {
        ...state,
        nextArtistContentURL: action.payload,
      };
    case SET_ARTIST_PREV_CONTENT_URL:
      return {
        ...state,
        prevArtistContentURL: action.payload,
      };
    default:
      return state;
  }
};

// @flow
import { SET_ARTIST } from './artist-search-actions';

export const artistSearchReducer = (state: Object = {}, action: TAction<Object, Object>) => {
  switch(action.type) {
    case SET_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    default:
      return state;
  }
};

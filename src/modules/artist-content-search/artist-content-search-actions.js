// @flow
import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  compose, fpGet, fpGetOr, trace,
} from 'lib/fp';
import { createNamespace } from 'lib/utils';
import { ARTIST_CONTENT_SEARCH_ACTION_NAMESPACE, DIRECTIONS_ENUM } from './artist-content-search-constants';
import { setNavURL } from './artist-content-search-utils';
import { getPrevArtistContentUrl, getNextArtistContentUrl } from './artist-content-search-selectors';

const useNamespace = createNamespace(ARTIST_CONTENT_SEARCH_ACTION_NAMESPACE);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const SET_ARTIST_CONTENT = useNamespace('SET_ARTIST_CONTENT');
const setArtistContentActionCreator = (
  payload: Array<TArtistContentItemDTO>,
): TAction<Array<TArtistContentItemDTO>, {}> => ({
  type: SET_ARTIST_CONTENT,
  payload,
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const SET_ARTIST_PREV_CONTENT_URL = useNamespace('SET_ARTIST_PREV_CONTENT_URL');
const setArtistPrevContentURLActionCreator = (payload: string): TAction<string, {}> => ({
  type: SET_ARTIST_PREV_CONTENT_URL,
  payload,
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const SET_ARTIST_NEXT_CONTENT_URL = useNamespace('SET_ARTIST_NEXT_CONTENT_URL');
export const setArtistNextContentURLActionCreator = (payload: string): TAction<string, {}> => ({
  type: SET_ARTIST_NEXT_CONTENT_URL,
  payload,
});

export const searchArtistContent = (query: string): ThunkAction => (dispatch: ThunkDispatch) => {
  console.log('Запрос поиска артиста:', query);
  return axios({
    method: 'get',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '697f8293admsh54aca6eb2a8ec1bp18829cjsnacd8e1d64989',
    },
    params: {
      q: query,
    },
  })
    .then(trace('Результат поиска артиста:'))
    .then(compose(
      setNavURL(DIRECTIONS_ENUM.NEXT, compose(dispatch, setArtistNextContentURLActionCreator)),
      fpGet('data'),
    ))
    .then(compose(dispatch, setArtistContentActionCreator, fpGetOr([], 'data')))
    .catch((e: Error) => console.warn('Ошибка поиска артиста:', e));
};

export const setArtistContentByUrl = (direction: string): ThunkAction => (
  dispatch: ThunkDispatch, getState: () => TApplicationState,
) => {
  const state = getState();
  let url;
  if (direction === DIRECTIONS_ENUM.PREV) {
    url = getPrevArtistContentUrl(state);
  }
  if (direction === DIRECTIONS_ENUM.NEXT) {
    url = getNextArtistContentUrl(state);
  }
  if (url) {
    return axios.get(url)
      .then(compose(
        setNavURL(DIRECTIONS_ENUM.NEXT, compose(dispatch, setArtistNextContentURLActionCreator)),
        fpGet('data'),
      ))
      .then(setNavURL(DIRECTIONS_ENUM.PREV, compose(dispatch, setArtistPrevContentURLActionCreator)))
      .then(compose(dispatch, setArtistContentActionCreator, fpGetOr([], 'data')))
      .catch((e: Error) => console.warn('Ошибка перехода по навигации:', e));
  }
};

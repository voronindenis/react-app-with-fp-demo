// @flow
import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { compose, fpGet } from 'lib/fp';
import { createNamespace } from 'lib/utils';
import { ARTIST_SEARCH_ACTION_NAMESPACE } from './artist-search-constants';

const useNamespace = createNamespace(ARTIST_SEARCH_ACTION_NAMESPACE);

export const SET_ARTIST = useNamespace('SET_ARTIST');
export const setArtistActionCreator = (payload: Object): TAction<Object, Object> => ({
  type: SET_ARTIST,
  payload,
});

export const searchArtist = (query: string): ThunkAction => (dispatch: ThunkDispatch) => {
  console.log('Запрос поиска артиста:', query);
  return axios({
    method: 'get',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '697f8293admsh54aca6eb2a8ec1bp18829cjsnacd8e1d64989',
    },
    params: {
      "q": query,
    },
  })
    .then(compose(dispatch, setArtistActionCreator, fpGet('data')))
    .catch((e: Object) => console.warn('Ошибка поиска исполнителя:', e));
};



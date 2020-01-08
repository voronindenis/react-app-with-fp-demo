// @flow

declare type TArtistSearchState = {
  artist: Object,
};

declare type TApplicationState = {
  'ARTIST_SEARCH': TArtistSearchState,
};

declare type TAction<P, M> = {
  type: string,
  payload?: P,
  error?: boolean,
  meta?: M,
};

declare type TArtistInfo = {
  name: string,
  picture: string,
};

declare type TAlbumInfo = {
  cover: string,
  title: string,
};

declare type TContentCard = {
  song: string,
  artist?: TArtistInfo,
  album?: TAlbumInfo,
  audio?: string,
};

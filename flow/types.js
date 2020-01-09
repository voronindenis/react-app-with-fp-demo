// @flow

// DTO types
declare type TDeezerSearchResponseDTO = {
  data: Array<TArtistContentItemDTO>,
  total: number,
  prev?: string,
  next?: string,
};

declare type TArtistDTO = {
  id: number,
  name: string,
  link: string,
  picture: string,
  picture_small: string,
  picture_medium: string,
  picture_big: string,
  picture_xl: string,
  tracklist: string,
  type: string,
};

declare type TAlbumDTO = {
  id: number,
  title: string,
  cover: string,
  cover_small: string,
  cover_medium: string,
  cover_big: string,
  cover_xl: string,
  tracklist: string,
  type: string,
};

declare type TArtistContentItemDTO = {
  id: number,
  readable: boolean,
  title: string,
  title_short: string,
  title_version: string,
  link: string,
  duration: number,
  rank: number,
  explicit_lyrics: boolean,
  explicit_content_lyrics: number,
  explicit_content_cover: number,
  preview: string,
  artist: TArtistDTO,
  album: TAlbumDTO,
  type: string,
};

// Components
// Content card component types
declare type TArtistInfo = {
  name: string,
  picture: string,
};

declare type TAlbumInfo = {
  cover: string,
  title: string,
};

declare type TContentCard = {
  id?: number,
  title?: ?string,
  artist?: ?TArtistInfo,
  album?: ?TAlbumInfo,
  preview?: ?string,
};

// Modules
// Artist search module types
declare type TArtistSearchState = {
  artistContent?: Array<TArtistContentItemDTO>,
  prevArtistContentURL?: string,
  nextArtistContentURL?: string,
};

declare type TApplicationState = {
  'ARTIST_SEARCH': TArtistSearchState,
};

declare type TArtistContentSelectorUtilResult = (mapper: TArtistContentMapFunction) => Array<TContentCard> | void;

// Artist content module types
declare type TArtistContentMapFunction = (artistContent: Array<TArtistContentItemDTO>) => Array<TContentCard> | void;

// Other types
/**
 * Flux Standard Action type
 * @property {string}  type
 * @property {Object}  [payload]
 * @property {boolean} [error]
 * @property {Object}  [meta]
 */
declare type TAction<P, M> = {
  type: string,
  payload?: P,
  error?: boolean,
  meta?: M,
};

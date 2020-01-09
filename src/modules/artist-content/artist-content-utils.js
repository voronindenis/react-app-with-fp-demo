// @flow
import {
  fpGet, fpMap, fpPick, maybe,
} from 'lib/fp';

export const mapFullInformation: TArtistContentMapFunction = maybe(undefined, fpMap(
  (artistContentItem: TArtistContentItemDTO) => ({
    ...fpPick(['id', 'title', 'preview'])(artistContentItem),
    artist: {
      name: fpGet('artist.name')(artistContentItem),
      picture: fpGet('artist.picture_small')(artistContentItem),
    },
    album: {
      cover: fpGet('album.cover_small')(artistContentItem),
      title: fpGet('album.title')(artistContentItem),
    },
  })
));

export const mapSongsTitles: TArtistContentMapFunction = maybe(undefined, fpMap(fpPick(['id', 'title'])));

export const mapSongs: TArtistContentMapFunction = maybe(undefined, fpMap(fpPick(['id', 'preview'])));

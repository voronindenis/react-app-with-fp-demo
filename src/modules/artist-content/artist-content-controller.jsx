// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getArtistContentSelectorUtil } from 'modules/artist-content-search';
import { mapFullInformation, mapSongsTitles, mapSongs } from './artist-content-utils';
import { CONTROL_RADIO_GROUP_CONFIG } from './artist-content-constants';
import { ArtistContent } from './artist-content';

type TConnectedProps = {
  artistContentSelectorUtil: TArtistContentSelectorUtilResult,
};

type TProps = {} & TConnectedProps;

const ArtistContentControllerComponent = React.memo<TProps>((props: TProps) => {
  const [radioValue, setRadioValue] = React.useState(CONTROL_RADIO_GROUP_CONFIG.FULL_INFORMATION_RADIO.VALUE);

  const radioChangeHandle = (e: SyntheticEvent<HTMLInputElement>, data: { value: string }) => {
    setRadioValue(data.value);
  };

  const createContentCardsList = () => {
    switch(radioValue) {
      case CONTROL_RADIO_GROUP_CONFIG.FULL_INFORMATION_RADIO.VALUE:
        return props.artistContentSelectorUtil(mapFullInformation);
      case CONTROL_RADIO_GROUP_CONFIG.ONLY_SONGS_TITLES_RADIO.VALUE:
        return props.artistContentSelectorUtil(mapSongsTitles);
      case CONTROL_RADIO_GROUP_CONFIG.ONLY_SONGS_RADIO.VALUE:
        return props.artistContentSelectorUtil(mapSongs);
      default:
        return [];
    }
  };

  return (
    <ArtistContent
      contentCardsList={createContentCardsList()}
      onRadioChange={radioChangeHandle}
      radioValue={radioValue}
    />
  );
});

const mapStateToProps = createStructuredSelector({
  artistContentSelectorUtil: getArtistContentSelectorUtil,
});

export const ArtistContentController = connect<TConnectedProps, Object, any, any, any, any>(
  mapStateToProps,
)(ArtistContentControllerComponent);

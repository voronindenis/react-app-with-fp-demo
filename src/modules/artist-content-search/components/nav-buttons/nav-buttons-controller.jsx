// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setArtistContentByUrl } from '../../artist-content-search-actions';
import { DIRECTIONS_ENUM } from '../../artist-content-search-constants';
import { getPrevButtonEnabledStatus, getNextButtonEnabledStatus } from '../../artist-content-search-selectors';
import { NavButtons } from './nav-buttons';

type TConnectedProps = {
  isNextButtonEnabled: boolean,
  isPrevButtonEnabled: boolean,
  setArtistContentByUrl: (direction: string) => Promise<TAction<string, {}> | void>;
};

type TProps = {} & TConnectedProps;

const NavButtonsControllerComponent = React.memo<TProps>((props: TProps) => {
  const prevButtonClickHandle = () => {
    props.setArtistContentByUrl(DIRECTIONS_ENUM.PREV);
  };

  const nextButtonClickHandle = () => {
    props.setArtistContentByUrl(DIRECTIONS_ENUM.NEXT);
  };

  return (
    <NavButtons
      isNextButtonEnabled={props.isNextButtonEnabled}
      isPrevButtonEnabled={props.isPrevButtonEnabled}
      onNextButtonClick={nextButtonClickHandle}
      onPrevButtonClick={prevButtonClickHandle}
    />
  );
});

const mapStateToProps = createStructuredSelector({
  isNextButtonEnabled: getNextButtonEnabledStatus,
  isPrevButtonEnabled: getPrevButtonEnabledStatus,
});

const mapDispatchToProps = {
  setArtistContentByUrl,
};

export const NavButtonsController = connect<TConnectedProps, {}, any, any, any, any>(
  mapStateToProps, mapDispatchToProps,
)(NavButtonsControllerComponent);

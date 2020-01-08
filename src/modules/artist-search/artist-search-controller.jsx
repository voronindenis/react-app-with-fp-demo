// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { ArtistSearch } from './artist-search';
import { searchArtist } from './artist-search-actions';

type TConnectedProps = {
  searchArtist: (query: string) => Promise<TAction>,
}

type TProps = {} & TConnectedProps;

const ArtistSearchControllerComponent = React.memo<TProps>((props: TProps) => {
  const [query, setQuery] = React.useState('');

  const searchButtonClickHandle = () => {
    props.searchArtist(query)
      .then(r => console.log(JSON.stringify((r))));
  };

  const searchInputChangeHandle = (e: SyntheticEvent<HTMLButtonElement>) => {
    setQuery(e.target.value)
  };

  return <ArtistSearch onSearchButtonClick={searchButtonClickHandle} onSearchInputChange={searchInputChangeHandle} />;
});

const mapDispatchToProps = {
  searchArtist,
};

export const ArtistSearchController = connect<TConnectedProps, Object, any, any, any, any>(
  null, mapDispatchToProps,
)(ArtistSearchControllerComponent);

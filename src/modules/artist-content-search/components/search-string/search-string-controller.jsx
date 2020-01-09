// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { compose, fpGet } from 'lib/fp/index';
import { searchArtistContent } from '../../artist-content-search-actions';
import { SearchString } from './search-string';

type TConnectedProps = {
  searchArtistContent: (query: string) => Promise<TAction<Array<TArtistContentItemDTO>, {}>>,
}

type TProps = {} & TConnectedProps;

const SearchStringControllerComponent = React.memo<TProps>((props: TProps) => {
  const [query, setQuery] = React.useState('');

  const searchButtonClickHandle = () => {
    props.searchArtistContent(query);
  };

  const searchInputChangeHandle = compose(setQuery, fpGet('target.value'));

  return <SearchString onSearchButtonClick={searchButtonClickHandle} onSearchInputChange={searchInputChangeHandle} />;
});

const mapDispatchToProps = {
  searchArtistContent,
};

export const SearchStringController = connect<TConnectedProps, {}, any, any, any, any>(
  null, mapDispatchToProps,
)(SearchStringControllerComponent);

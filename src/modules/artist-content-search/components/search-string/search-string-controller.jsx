// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { compose, fpGet, memoize } from 'lib/fp';
import { useModal } from 'hooks/useModal';
import { searchArtistContent } from '../../artist-content-search-actions';
import { SearchString } from './search-string';

type TConnectedProps = {
  searchArtistContent: (query: string) => Promise<TAction<Array<TArtistContentItemDTO>, {}>>,
}

type TProps = {} & TConnectedProps;

const SearchStringControllerComponent = React.memo<TProps>((props: TProps) => {
  const [query, setQuery] = React.useState('');
  const [Modal, showModal] = useModal();

  const createActions = memoize((closeModalFunc?: () => void) => (
    <Button
      color="green"
      icon="checkmark"
      onClick={closeModalFunc}
      inverted
      content="Got it"
    />
  ));

  const searchButtonClickHandle = () => {
    props.searchArtistContent(query)
      .catch(compose(showModal, fpGet('message')));
  };

  const searchInputChangeHandle = compose(setQuery, fpGet('target.value'));

  return (
    <>
      <Modal
        createActions={createActions}
        headerConfig={{ content: 'Error!' }}
        modalConfig={{ basic: true, size: 'small' }}
      />
      <SearchString onSearchButtonClick={searchButtonClickHandle} onSearchInputChange={searchInputChangeHandle} />
    </>
  );
});

const mapDispatchToProps = {
  searchArtistContent,
};

export const SearchStringController = connect<TConnectedProps, {}, any, any, any, any>(
  null, mapDispatchToProps,
)(SearchStringControllerComponent);

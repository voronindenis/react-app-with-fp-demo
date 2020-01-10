// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { ArtistContent } from 'modules/artist-content';
import { NavButtons, SearchString } from 'modules/artist-content-search';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <SearchString />
        <ArtistContent />
        <NavButtons />
      </Container>
    </Provider>
  );
}

export default App;

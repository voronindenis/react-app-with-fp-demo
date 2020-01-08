// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ArtistSearch } from 'modules/artist-search';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <ArtistSearch />
        </Router>
      </Container>
    </Provider>
  );
}

export default App;

// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Card } from 'semantic-ui-react';

type TConnectedProps = {};

type TProps = {} & TConnectedProps;

const ArtistContentControllerComponent = React.memo<TProps>((props: TProps) => {
  return (
    <Card.Group>
      {

      }
    </Card.Group>
  );
});

const mapStateToProps = createStructuredSelector({

});

export const ArtistContentController = connect<TConnectedProps, Object, any, any, any, any>(
  mapStateToProps,
)(ArtistContentControllerComponent);

// @flow
import * as React from 'react';
import {
  Button, Divider, Grid, Input,
} from 'semantic-ui-react';

type TProps = {
  onSearchButtonClick: () => void,
  onSearchInputChange: () => void,
};

export const ArtistSearch = React.memo<TProps>((props: TProps) => {
  return (
    <React.Fragment>
      <Divider hidden section />
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Input
              action={<Button icon="search" onClick={props.onSearchButtonClick} />}
              fluid
              onChange={props.onSearchInputChange}
              placeholder='Search artist...'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden section />
    </React.Fragment>
  );
});

// @flow
import * as React from 'react';
import {
  Button, Divider, Grid, Input, Image,
} from 'semantic-ui-react';
import WatsUpDoc from 'assets/whats-up-doc.jpg';

type TProps = {
  onSearchButtonClick: () => void,
  onSearchInputChange: (e: SyntheticEvent<HTMLInputElement>) => void,
};

export const SearchString = React.memo<TProps>((props: TProps) => (
  <>
    <Divider hidden section />
    <Image centered src={WatsUpDoc} />
    <Divider hidden section />
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Input
            action={<Button icon="search" onClick={props.onSearchButtonClick} />}
            fluid
            onChange={props.onSearchInputChange}
            placeholder="Search artist..."
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider hidden section />
  </>
));

// @flow
import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';

type TProps = {
  isNextButtonEnabled: boolean,
  isPrevButtonEnabled: boolean,
  onNextButtonClick: () => void,
  onPrevButtonClick: () => void,
};

export const NavButtons = React.memo<TProps>((props: TProps) => (
  <Grid>
    <Grid.Row centered>
      <Grid.Column width={2}>
        <Button.Group>
          <Button disabled={!props.isPrevButtonEnabled} icon="chevron left" onClick={props.onPrevButtonClick} />
          <Button disabled={!props.isNextButtonEnabled} icon="chevron right" onClick={props.onNextButtonClick} />
        </Button.Group>
      </Grid.Column>
    </Grid.Row>
  </Grid>
));

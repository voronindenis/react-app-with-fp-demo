// @flow
import * as React from 'react';
import { Grid, Radio } from 'semantic-ui-react';
import { CONTROL_RADIO_GROUP_CONFIG } from './artist-content-constants';

type TProps = {
  onRadioChange: (e: SyntheticEvent<HTMLInputElement>, data: { value: string }) => void,
  radioValue: string,
};

export const ArtistContentControlRadioGroup = React.memo<TProps>((props: TProps) => (
  <Grid>
    <Grid.Row centered columns={3}>
      <Grid.Column textAlign="center">
        <Radio
          checked={props.radioValue === CONTROL_RADIO_GROUP_CONFIG.FULL_INFORMATION_RADIO.VALUE}
          label={CONTROL_RADIO_GROUP_CONFIG.FULL_INFORMATION_RADIO.LABEL}
          name={CONTROL_RADIO_GROUP_CONFIG.NAME}
          onChange={props.onRadioChange}
          value={CONTROL_RADIO_GROUP_CONFIG.FULL_INFORMATION_RADIO.VALUE}
        />
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Radio
          checked={props.radioValue === CONTROL_RADIO_GROUP_CONFIG.ONLY_SONGS_RADIO.VALUE}
          label={CONTROL_RADIO_GROUP_CONFIG.ONLY_SONGS_RADIO.LABEL}
          name={CONTROL_RADIO_GROUP_CONFIG.NAME}
          onChange={props.onRadioChange}
          value={CONTROL_RADIO_GROUP_CONFIG.ONLY_SONGS_RADIO.VALUE}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
));

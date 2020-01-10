// @flow
import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import { ArtistContentsCardsList } from './artist-content__cards-list';
import {ArtistContentControlRadioGroup} from './artist-content__control-radio-group';

type TProps = {
  contentCardsList: Array<TContentCard> | void,
  onRadioChange: (e: SyntheticEvent<HTMLInputElement>, data: { value: string }) => void,
  radioValue: string,
};

export const ArtistContent = React.memo<TProps>((props: TProps) => (
  <>
    <ArtistContentControlRadioGroup
      onRadioChange={props.onRadioChange}
      radioValue={props.radioValue}
    />
    <Divider hidden />
    <ArtistContentsCardsList contentCardsList={props.contentCardsList} />
  </>
));

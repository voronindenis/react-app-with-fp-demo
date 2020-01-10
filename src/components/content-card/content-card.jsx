// @flow
import * as React from 'react';
import { Card, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const Audio = styled.audio`
  width: 100%;
`;

type TProps = TContentCard;

export const ContentCard = React.memo<TProps>((props: TProps) => (
  <Card>
    <Card.Content>
      {
        props.title && (
          <Card.Header>{props.title}</Card.Header>
        )
      }
      {
        props.artist && props.album && (
          <>
            <Image
              circular
              floated="right"
              size="tiny"
              src={props.album.cover}
            />
            <Image
              circular
              floated="right"
              size="tiny"
              src={props.artist.picture}
            />
            <Card.Meta>{props.artist.name}</Card.Meta>
            <Card.Description>{props.album.title}</Card.Description>
          </>
        )
      }
    </Card.Content>
    {
      props.preview && (
        <Card.Content>
          <Audio src={props.preview} controls />
        </Card.Content>
      )
    }
  </Card>
));

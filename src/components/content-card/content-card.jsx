// @flow
import * as React from 'react';
import { Card, Image } from 'semantic-ui-react'

type TProps = TContentCard;

export const ContentCard = React.memo<TProps>((props: TProps) => (
  <Card>
    <Card.Content>
      <Card.Header>{props.song}</Card.Header>
      {
        props.artist && (
          <React.Fragment>
            <Image
              circular
              floated="right"
              size="tiny"
              src={props.artist.picture}
            />
            <Card.Meta>{props.artist.name}</Card.Meta>
          </React.Fragment>
        )
      }
      {
        props.album && (
          <React.Fragment>
            <Image
              circular
              floated="right"
              size="tiny"
              src={props.album.cover}
            />
            <Card.Description>{props.album.title}</Card.Description>
          </React.Fragment>
        )
      }
    </Card.Content>
    {
      props.audio && (
        <Card.Content extra>
          <audio src={props.audio} />
        </Card.Content>
      )
    }
  </Card>
));

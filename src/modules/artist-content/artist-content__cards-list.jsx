// @flow
import * as React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { ContentCard } from 'components/content-card';
import BugsBunnyNo from 'assets/bugs-bunny-no.jpeg';

type TProps = {
  contentCardsList: Array<TContentCard> | void,
};

export const ArtistContentsCardsList = React.memo<TProps>((props: TProps) => {
  if (!props.contentCardsList) {
    return null;
  }
  if (props.contentCardsList.length) {
    return (
      <Card.Group centered>
        {
          props.contentCardsList.map((contentCard: TContentCard) => (
            <ContentCard
              album={contentCard.album}
              artist={contentCard.artist}
              key={contentCard.id}
              preview={contentCard.preview}
              title={contentCard.title}
            />
          ))
        }
      </Card.Group>
    );
  }
  return <Image centered src={BugsBunnyNo} />;
});

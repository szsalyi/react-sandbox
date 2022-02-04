import React from 'react';
import { Container, InfoTitle, TitleContainer } from './EventCard.styles';
import { Event } from '../../api/datahooks/useGetEvents';
import { Artist } from '../../api/datahooks/useSearchArtist';

export interface EventCardProps {
  event: Event;
  artist: Artist;
  selected: boolean;
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | undefined>>;
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    <Container onClick={() => props.setSelectedEvent(props.event)} selected={props.selected}>
      <TitleContainer>
        <InfoTitle>
          {props.event.title ? props.event.title : `${props.artist?.name} - Event`}
        </InfoTitle>
        <InfoTitle>{new Date(props.event?.datetime).toLocaleDateString('en-GB')}</InfoTitle>
      </TitleContainer>
    </Container>
  );
};

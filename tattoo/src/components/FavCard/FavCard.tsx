import React from 'react';
import { Event } from '../../api/datahooks/useGetEvents';
import { Container, HeartBrokenIcon, CardWrapper, FavTitle, IconContainer } from './FavCard.styles';

export interface FavCardProps {
  event: Event;
  removeFavourite: (event: Event) => void;
}

export const FavCard: React.FC<FavCardProps> = (props) => {
  return (
    <Container>
      <CardWrapper>
        <FavTitle>Artist:</FavTitle>
        <FavTitle>{props.event.artist?.name}</FavTitle>
        <FavTitle>Date:</FavTitle>
        <FavTitle>{new Date(props.event.datetime).toLocaleDateString('en-GB')}</FavTitle>
        <FavTitle>Location:</FavTitle>
        <FavTitle>{props.event.venue.name}</FavTitle>
      </CardWrapper>
      <IconContainer>
        <HeartBrokenIcon size={20} onClick={() => props.removeFavourite(props.event)} />
      </IconContainer>
    </Container>
  );
};

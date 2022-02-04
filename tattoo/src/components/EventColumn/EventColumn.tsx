import React from 'react';
import { Event } from '../../api/datahooks/useGetEvents';
import {
  HeartIcon,
  InfoTitle,
  Link,
  CardWrapper,
  NoOfferTitle,
  IconContainer,
} from './EventColumn.styles';
import { Card } from '../Card/Card';

export interface EventColumnProps {
  addFavourite: (event: Event) => void;
  selectedEvent?: Event;
}

const getGoggleMapsLink = (lat: string, long: string) => {
  return `http://maps.google.com/maps/place/@${lat},${long},15z/data=!3m1!1e3`;
};

export const EventColumn: React.FC<EventColumnProps> = (props) => {
  return (
    <>
      {props.selectedEvent && (
        <>
          <Card title="Event Info">
            <CardWrapper>
              <InfoTitle>Line Up:</InfoTitle>
              {props.selectedEvent.lineup.map((artistName, index) => (
                <InfoTitle key={`line_up_${index}`}>{artistName}</InfoTitle>
              ))}
              <Link href={props.selectedEvent.url} rel="noreferrer noopener" target="_blank">
                Event Link
              </Link>
              <IconContainer>
                <HeartIcon
                  size={20}
                  onClick={() =>
                    props.selectedEvent ? props.addFavourite(props.selectedEvent) : undefined
                  }
                />
              </IconContainer>
            </CardWrapper>
          </Card>
          <Card title="Venue Info">
            <CardWrapper>
              <InfoTitle>Name:</InfoTitle>
              <InfoTitle>{props.selectedEvent.venue.name}</InfoTitle>
              <InfoTitle>Location:</InfoTitle>
              <InfoTitle>{props.selectedEvent.venue.location}</InfoTitle>
              <Link
                href={getGoggleMapsLink(
                  props.selectedEvent.venue.latitude,
                  props.selectedEvent.venue.longitude
                )}
                rel="noreferrer noopener"
                target="_blank"
              >
                Check on Google Maps
              </Link>
              <IconContainer>
                <HeartIcon
                  size={20}
                  onClick={() =>
                    props.selectedEvent ? props.addFavourite(props.selectedEvent) : undefined
                  }
                />
              </IconContainer>
            </CardWrapper>
          </Card>
          <Card title="Special Info">
            <CardWrapper>
              <InfoTitle>Offers:</InfoTitle>
              {props.selectedEvent.offers ? (
                props.selectedEvent.offers.map((offer, index) => (
                  <Link
                    key={`link_${index}`}
                    href={offer.url}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {offer.type}
                  </Link>
                ))
              ) : (
                <NoOfferTitle>No offer found for the event.</NoOfferTitle>
              )}
              <IconContainer>
                <HeartIcon
                  size={20}
                  onClick={() =>
                    props.selectedEvent ? props.addFavourite(props.selectedEvent) : undefined
                  }
                />
              </IconContainer>
            </CardWrapper>
          </Card>
        </>
      )}
    </>
  );
};

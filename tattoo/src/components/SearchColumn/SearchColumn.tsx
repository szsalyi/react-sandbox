import React, { useState, useEffect } from 'react';
import { SearchInput } from '../SearchInput/SearchInput';
import { useDebounce } from '../../hooks/useDebounce.hook';
import { Artist, useSearchArtist } from '../../api/datahooks/useSearchArtist';
import { Event, useGetEvents } from '../../api/datahooks/useGetEvents';
import { ArtistProfile } from '../ArtistProfile/ArtistProfile';
import { useLoading } from '../../context/useLoading';
import { EventCard } from '../EventCard/EventCard';
import { EventCardContainer, EventsTitle } from './SearchColumn.styles';
import { Card } from '../Card/Card';

export interface SearchColumnProps {
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | undefined>>;
  selectedEventId?: string;
}

export const SearchColumn: React.FC<SearchColumnProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [artist, setArtist] = useState<Artist>();
  const [events, setEvents] = useState<Event[]>();
  const [artistError, setArtistError] = useState<string>();
  const [eventsError, setEventsError] = useState<string>();
  const delayedValue = useDebounce(inputValue, 750);

  const { setLoading, setMessage } = useLoading();

  const [searchArtist, { loading }] = useSearchArtist({
    onComplete: (res) => {
      if (res && res.id) {
        return setArtist(res);
      }
      return setArtistError(`Not found. Try another artist please.`);
    },
    onError: () => {
      setArtistError(`Not found. Try another artist please.`);
    },
  });

  const [getEvents, { loading: eventsLoading }] = useGetEvents({
    onComplete: (res) => {
      if (res && res.length) {
        return setEvents(res);
      }
      return setEventsError('No upcoming events found.');
    },
    onError: () => {
      setEventsError('No upcoming events found.');
    },
  });

  useEffect(() => {
    if (delayedValue) {
      searchArtist({ variables: { searchTerm: delayedValue.trim() } });
    }
  }, [delayedValue]);

  useEffect(() => {
    if (loading || eventsLoading) {
      setMessage(loading ? 'Artist loading...' : 'Events loading...');
      return setLoading(true);
    }
    setMessage('');
    return setLoading(false);
  }, [loading, eventsLoading]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter' && inputValue) {
      e.preventDefault();
      e.stopPropagation();
      searchArtist({ variables: { searchTerm: delayedValue } });
    }
  };

  const handleInputChange = (value: string) => {
    setArtistError(undefined);
    setEventsError(undefined);
    setArtist(undefined);
    setEvents(undefined);
    props.setSelectedEvent(undefined);
    setInputValue(value);
  };

  const searchForEvents = () => {
    if (artist) {
      getEvents({ variables: { artistName: artist.name } });
    }
  };

  return (
    <>
      <Card title="Search for an artist">
        <SearchInput
          placeHolder="Search"
          value={inputValue}
          onChange={(value) => handleInputChange(value)}
          onKeyDown={onKeyDown}
          error={artistError}
        />
      </Card>

      {artist && (
        <ArtistProfile
          error={eventsError}
          imageUrl={artist.image_url}
          name={artist.name}
          facebookUrl={artist.facebook_page_url}
          links={artist.links}
          onClick={searchForEvents}
        />
      )}
      <EventCardContainer>
        {events && <EventsTitle>Events</EventsTitle>}
        {artist &&
          events &&
          events.map((event, index) => (
            <EventCard
              event={event}
              key={`event_${index}`}
              artist={artist}
              selected={props.selectedEventId === event.id}
              setSelectedEvent={props.setSelectedEvent}
            />
          ))}
      </EventCardContainer>
    </>
  );
};

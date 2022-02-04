import React, { useState, useEffect } from 'react';
import { PageContainer } from '../components/layout/PageContainer/PageContainer';
import { SearchColumn } from '../components/SearchColumn/SearchColumn';
import { EventColumn } from '../components/EventColumn/EventColumn';
import { FavouritesColumn } from '../components/FavouritesColumn/FavouritesColumn';
import { Event } from '../api/datahooks/useGetEvents';
import { Stepper } from '../components/Stepper/Stepper';
import { Container } from './Home.styles';
import { ColumnContainer } from '../components/layout/ColumnContainer/ColumnContainer';
import { setStorageItem, getStorageItem } from '../utils/storage';

export const Home: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const [favourites, setFavourites] = useState<Event[]>([]);
  const [actiiveStepIndex, setActiveStepIndex] = useState(0);

  const addFav = (event: Event) => {
    const hasIndex = favourites.findIndex((fav) => fav.id === event.id);
    if (hasIndex < 0) {
      const favs = [...favourites, event];
      setStorageItem('favs', JSON.stringify(favs));
      return setFavourites(favs);
    }
  };

  const removeFav = (event: Event) => {
    const updatedFavs = favourites.filter((favEvent) => event.id !== favEvent.id);
    setStorageItem('favs', JSON.stringify(updatedFavs));
    setFavourites(updatedFavs);
  };

  useEffect(() => {
    if (selectedEvent && !favourites.length) {
      return setActiveStepIndex(1);
    }
    if (selectedEvent && favourites) {
      return setActiveStepIndex(2);
    }
  }, [selectedEvent, favourites]);

  useEffect(() => {
    const savedFavs = getStorageItem('favs');
    if (savedFavs) {
      const parsedFavs: Event[] = JSON.parse(savedFavs);
      setFavourites(parsedFavs || []);
    }
  }, []);

  return (
    <PageContainer>
      <Stepper activeStepIndex={actiiveStepIndex} />
      <Container>
        <ColumnContainer columnId="search">
          <SearchColumn selectedEventId={selectedEvent?.id} setSelectedEvent={setSelectedEvent} />
        </ColumnContainer>
        <ColumnContainer columnId="selected">
          <EventColumn selectedEvent={selectedEvent} addFavourite={addFav} />
        </ColumnContainer>
        <ColumnContainer columnId="favourites">
          <FavouritesColumn removeFavourite={removeFav} favEvents={favourites} />
        </ColumnContainer>
      </Container>
    </PageContainer>
  );
};

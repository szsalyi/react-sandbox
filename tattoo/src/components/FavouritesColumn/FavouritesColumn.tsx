import React from 'react';
import { Event } from '../../api/datahooks/useGetEvents';
import { FavCard } from '../../components/FavCard/FavCard';
import { Title } from './FavouritesColumn.styles';

export interface FavouritesColumnProps {
  removeFavourite: (event: Event) => void;
  favEvents?: Event[];
}

export const FavouritesColumn: React.FC<FavouritesColumnProps> = (props) => {
  return (
    <>
      {!!props.favEvents && props.favEvents.length > 0 && (
        <>
          <Title> Favourite events</Title>
          {props.favEvents.map((event, index) => (
            <FavCard key={`event_${index}`} event={event} removeFavourite={props.removeFavourite} />
          ))}
        </>
      )}
    </>
  );
};

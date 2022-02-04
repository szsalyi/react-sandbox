import { useApi } from './useApi';
import { BaseHookRequest, BaseRequest } from './useApi.types';
import { Artist } from './useSearchArtist';

export interface SearchEventsParams {
  artistName: string;
}

export interface Offer {
  type: string;
  url: string;
  status: string;
}

export interface Venue {
  name: string;
  latitude: string;
  longitude: string;
  location: string;
  city: string;
  region: string;
  country: string;
}

export interface Event {
  id: string;
  url: string;
  datetime: string;
  title: string;
  description: string;
  artist_id: string;
  on_sale_datetime: string;
  festival_start_date: string;
  festival_end_date: string;
  festival_datetime_display_rule: string;
  bandsintown_plus: boolean;
  lineup: string[];
  offers: Offer[];
  venue: Venue;
  artist?: Artist;
}

export const useGetEvents: BaseHookRequest<Event[], SearchEventsParams> = (params) => {
  const [{ getRequest }, state] = useApi<Event[]>(params);
  const getEvents: BaseRequest<SearchEventsParams> = (details) =>
    getRequest<SearchEventsParams>(
      `artists/${details?.variables.artistName}/events?app_id=${process.env.REACT_APP_BACKEND_ID}`
    );
  return [getEvents, state];
};

import { useApi } from './useApi';
import { BaseHookRequest, BaseRequest } from './useApi.types';

export interface SearchArtistParams {
  searchTerm: string;
}

export interface ArtistLinks {
  type: string;
  url: string;
}

export interface Artist {
  id: string;
  image_url: string;
  mbid: string;
  name: string;
  support_url: string;
  thumb_url: string;
  upcoming_event_count: number;
  facebook_page_url: string;
  links: ArtistLinks[];
}

export const useSearchArtist: BaseHookRequest<Artist, SearchArtistParams> = (params) => {
  const [{ getRequest }, state] = useApi<Artist>(params);
  const getArtist: BaseRequest<SearchArtistParams> = (details) =>
    getRequest<SearchArtistParams>(
      `artists/${details?.variables.searchTerm}?app_id=${process.env.REACT_APP_BACKEND_ID}`
    );
  return [getArtist, state];
};

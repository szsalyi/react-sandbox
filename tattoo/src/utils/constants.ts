import { Event } from '../api/datahooks/useGetEvents';
import { Artist } from '../api/datahooks/useSearchArtist';

export const ExampleArtist: Artist = {
  thumb_url: 'https://photos.bandsintown.com/thumb/8587184.jpeg',
  mbid: '98dc6da7-2486-4072-a729-1f32c4fb01ce',
  facebook_page_url: 'http://www.facebook.com/528654630559216',
  image_url: 'https://photos.bandsintown.com/large/8587184.jpeg',
  upcoming_event_count: 1,
  support_url: '',
  name: 'Alma',

  links: [
    {
      type: 'website',
      url: 'http://cyberalma.com/',
    },
    {
      type: 'facebook',
      url: 'https://www.facebook.com/CYBERALMA/',
    },
    {
      type: 'instagram',
      url: 'https://instagram.com/cyberalma/',
    },
  ],
  id: '468344',
};

export const ExampleEvent: Event = {
  offers: [
    {
      type: 'Tickets',
      url: 'https://www.bandsintown.com/t/1023394922?app_id=123&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket',
      status: 'available',
    },
  ],
  venue: {
    country: 'Germany',
    city: 'Erlangen',
    latitude: '49.59099',
    name: 'Konzertwerkstatt des Erlanger Musikinstitut e.V.',
    location: 'Erlangen, Germany',
    region: '',
    longitude: '11.00783',
  },
  artist: {
    ...ExampleArtist,
  },
  festival_datetime_display_rule: '',
  description: '',
  lineup: ['Alma'],
  festival_start_date: '',
  bandsintown_plus: false,
  title: '',
  artist_id: '468344',
  url: 'https://www.bandsintown.com/e/1023394922?app_id=123&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event',
  datetime: '2022-02-19T20:30:00',
  on_sale_datetime: '',
  id: '1023394922',
  festival_end_date: '',
};

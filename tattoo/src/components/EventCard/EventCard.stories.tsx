import { EventCard, EventCardProps } from './EventCard';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';
import { ExampleEvent, ExampleArtist } from '../../utils/constants';

export default {
  title: 'EventCard',
  component: EventCard,
} as Meta;

const Template: Story<EventCardProps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <EventCard {...args} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'EventCard';
HeaderStory.args = {
  event: ExampleEvent,
  artist: ExampleArtist,
  selected: false,
  setSelectedEvent: () => {},
};

import { EventColumn, EventColumnProps } from './EventColumn';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';
import { ExampleEvent } from '../../utils/constants';

export default {
  title: 'EventColumn',
  component: EventColumn,
} as Meta;

const Template: Story<EventColumnProps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <EventColumn {...args} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'EventColumn';
HeaderStory.args = {
  addFavourite: () => {},
  selectedEvent: ExampleEvent,
};

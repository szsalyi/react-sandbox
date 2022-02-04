import { FavCard, FavCardProps } from './FavCard';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';
import { ExampleEvent } from '../../utils/constants';

export default {
  title: 'FavCard',
  component: FavCard,
} as Meta;

const Template: Story<FavCardProps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <FavCard {...args} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'FavCard';
HeaderStory.args = {
  event: ExampleEvent,
  removeFavourite: () => {},
};

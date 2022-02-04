import { FavouritesColumn, FavouritesColumnProps } from './FavouritesColumn';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';
import { ExampleEvent } from '../../utils/constants';

export default {
  title: 'FavouritesColumn',
  component: FavouritesColumn,
} as Meta;

const Template: Story<FavouritesColumnProps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <FavouritesColumn {...args} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'FavouritesColumn';
HeaderStory.args = {
  removeFavourite: () => {},
  favEvents: [ExampleEvent],
};

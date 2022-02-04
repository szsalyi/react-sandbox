import { ArtistProfile, ArtistProfileProps } from './ArtistProfile';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';

export default {
  title: 'ArtistProfile',
  component: ArtistProfile,
} as Meta;

const Template: Story<ArtistProfileProps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <ArtistProfile {...args} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'ArtistProfile';
HeaderStory.args = {
  imageUrl: 'https://photos.bandsintown.com/large/8587184.jpeg',
  name: 'Example artist',
  facebookUrl: '',
  error: '',
  links: [],
  onClick: () => {},
};

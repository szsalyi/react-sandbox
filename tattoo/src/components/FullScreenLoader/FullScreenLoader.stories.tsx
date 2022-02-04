import { FullScreenLoader, FullScreenLoaderProps } from './FullScreenLoader';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';

export default {
  title: 'FullScreenLoader',
  component: FullScreenLoader,
} as Meta;

const Template: Story<FullScreenLoaderProps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <FullScreenLoader {...args} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'FullScreenLoader';
HeaderStory.args = {
  loading: true,
  message: 'Full screen loading',
};

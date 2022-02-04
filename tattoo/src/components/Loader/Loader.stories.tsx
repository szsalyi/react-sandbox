import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { Loader } from './Loader';
import { themes } from '../../theme/theme';

export default {
  title: 'Loader',
  component: Loader,
} as Meta;

const LoaderTemplate: Story = (args) => {
  return (
    <ThemeProvider theme={themes['light']}>
      <Loader {...args} />
    </ThemeProvider>
  );
};

export const LoaderStory = LoaderTemplate.bind({});
LoaderStory.storyName = 'Loader';

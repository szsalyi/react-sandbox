import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { GenericButton, GenericButtonProps } from './GenericButton';
import { themes } from '../../theme/theme';

export default {
  title: 'GenericButton',
  component: GenericButton,
} as Meta;

const LightButtonTemplate: Story<GenericButtonProps> = (args) => {
  return (
    <ThemeProvider theme={themes['light']}>
      <GenericButton {...args} />
    </ThemeProvider>
  );
};

const DarkButtonTemplate: Story<GenericButtonProps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <GenericButton {...args} />
    </ThemeProvider>
  );
};

export const LightButtonStory = LightButtonTemplate.bind({});
export const DarkButtonStory = DarkButtonTemplate.bind({});

LightButtonStory.storyName = 'LightGenericButton';
LightButtonStory.args = {
  title: 'Light Button',
  loading: false,
  onClick: () => console.log(''),
};

DarkButtonStory.storyName = 'DarkGenericButton';
DarkButtonStory.args = {
  title: 'Dark Button',
  loading: false,
  onClick: () => console.log(''),
};

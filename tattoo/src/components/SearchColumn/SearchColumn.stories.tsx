import { SearchColumn } from './SearchColumn';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';

export default {
  title: 'SearchColumn',
  component: SearchColumn,
} as Meta;

const Template: Story = (args) => {
  return (
    <ThemeProvider theme={themes['light']}>
      <SearchColumn {...args} setSelectedEvent={() => {}} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'SearchColumn';
HeaderStory.args = {
  setTheme: () => console.log(''),
  theme: 'light',
};

import { SearchInput, SearchInputProps } from './SearchInput';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';

export default {
  title: 'SearchInput',
  component: SearchInput,
} as Meta;

const Template: Story<SearchInputProps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <SearchInput {...args} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'SearchInput';
HeaderStory.args = {
  placeHolder: 'Search',
  onChange: () => {},
  onKeyDown: () => {},
  error: 'Error text',
};

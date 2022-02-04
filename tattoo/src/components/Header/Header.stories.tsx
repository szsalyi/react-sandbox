import { useState } from 'react';
import { Header, HeaderProps } from './Header';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';
import { AppTheme } from '../../hooks/useAppTheme.hook';

export default {
  title: 'Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => {
  const [appliedTheme, setAppliedTheme] = useState<AppTheme>('light');

  return (
    <ThemeProvider theme={themes[appliedTheme]}>
      <Header
        {...args}
        theme={appliedTheme}
        setTheme={() => setAppliedTheme(appliedTheme === 'light' ? 'dark' : 'light')}
      />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'Header';
HeaderStory.args = {
  setTheme: () => console.log(''),
  theme: 'light',
};

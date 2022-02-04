import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../components/Header/Header';
import { themes } from '../theme/theme';

test('Header title renders correctly', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={themes['dark']}>
      <Header theme="dark" setTheme={() => {}} />
    </ThemeProvider>
  );
  const headerTitleElement = getByTestId('headerTitle');
  expect(headerTitleElement.textContent).toBe("Who's in town?");
});

test('Dark header theming works properly', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={themes['dark']}>
      <Header theme="dark" setTheme={() => {}} />
    </ThemeProvider>
  );
  const headerContainerElement = getByTestId('headerContainer');
  const iconElement = getByTestId('sunIcon');
  expect(headerContainerElement).toHaveStyle('background-image: #121212;');
  expect(iconElement).toBeInTheDocument();
});

test('Light header theming works properly', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={themes['light']}>
      <Header theme="light" setTheme={() => {}} />
    </ThemeProvider>
  );
  const headerContainerElement = getByTestId('headerContainer');
  const iconElement = getByTestId('moonIcon');
  expect(headerContainerElement).toHaveStyle('background-image: #fff;');
  expect(iconElement).toBeInTheDocument();
});

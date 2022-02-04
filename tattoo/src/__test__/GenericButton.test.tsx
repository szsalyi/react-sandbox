import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { GenericButton } from '../components/GenericButton/GenericButton';
import { themes } from '../theme/theme';

test('Button title renders correctly', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={themes['dark']}>
      <GenericButton title="Search" loading={false} onClick={() => {}} />
    </ThemeProvider>
  );
  const buttonElement = getByTestId('button');
  expect(buttonElement.textContent).toBe('Search');
});

test('Button theming works properly', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={themes['dark']}>
      <GenericButton title="Search" loading={false} onClick={() => {}} />
    </ThemeProvider>
  );
  const buttonElement = getByTestId('button');
  expect(buttonElement).toHaveStyle('background-image: #121212;');
});

test('Button theming works properly', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={themes['light']}>
      <GenericButton title="Search" loading={false} onClick={() => {}} />
    </ThemeProvider>
  );
  const buttonElement = getByTestId('button');
  expect(buttonElement).toHaveStyle('background-image: #fff;');
});

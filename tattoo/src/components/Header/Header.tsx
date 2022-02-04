import React from 'react';
import {
  HeaderContainer,
  NavTitle,
  NavWrapper,
  SettingsWrapper,
  MoonIcon,
  SunIcon,
} from './Header.styles';
import { AppTheme } from '../../hooks/useAppTheme.hook';

export interface HeaderProps {
  setTheme: () => void;
  theme: AppTheme;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderContainer data-testid="headerContainer">
      <NavWrapper>
        <NavTitle data-testid="headerTitle">Who's in town?</NavTitle>
      </NavWrapper>
      <SettingsWrapper>
        {props.theme === 'light' ? (
          <MoonIcon size={30} onClick={props.setTheme} data-testid="moonIcon" />
        ) : (
          <SunIcon size={30} onClick={props.setTheme} data-testid="sunIcon" />
        )}
      </SettingsWrapper>
    </HeaderContainer>
  );
};

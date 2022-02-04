import styled from 'styled-components';
import { HiMoon } from 'react-icons/hi';
import { CgSun } from 'react-icons/cg';

export const HeaderContainer = styled.div`
  width: 100%;
  position: sticky;
  background-color: ${(props) => props.theme.pageBackground};
  flex-direction: row;
  align-items: center;
  display: flex;
`;

export const NavTitle = styled.span`
  color: ${(props) => props.theme.textColors.titleColor};
  font-weight: bold;
  text-transform: uppercase;
`;

export const NavWrapper = styled.div`
  width: 90%;
  padding: 20px;
`;

export const SettingsWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const MoonIcon = styled(HiMoon)`
  color: ${(props) => props.theme.textColors.titleColor};
`;

export const SunIcon = styled(CgSun)`
  color: ${(props) => props.theme.white};
`;

import styled from 'styled-components';
import { screenSize } from '../../theme/theme';

export const StepperContainer = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${(props) => props.theme.cardBackground.primary};
  display: flex;
  flex-direction: row;
  @media ${screenSize.tablet} {
    height: 60px;
  }
  @media ${screenSize.laptop} {
    height: 80px;
  }
`;

export const Stepp = styled.div<{ selected: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.selected ? props.theme.cardBackground.primary : props.theme.cardBackground.secondary};
`;

export const SteppTitle = styled.span<{ selected: boolean }>`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => (props.selected ? props.theme.white : props.theme.textColors.secondary)};
  @media ${screenSize.tablet} {
    font-size: 20px;
    line-height: 24px;
  }
  @media ${screenSize.laptop} {
    font-size: 28px;
    line-height: 32px;
  }
`;

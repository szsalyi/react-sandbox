import styled from 'styled-components';
import { BounceLoader } from 'react-spinners';
import { themes } from '../../theme/theme';

export const CustomLoader = styled(BounceLoader).attrs({
  color: themes['light'].secondary,
})``;

export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  left: 0;
  top: 0;
  align-items: center;
  height: 100%;
  justify-content: center;
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  flex-direction: column;
`;

export const LoaderWrapper = styled.div`
  display: inherit;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoaderMessage = styled.span`
  margin-top: 20px;
  font-size: 30px;
  color: ${(props) => props.theme.secondary};
  text-transform: uppercase;
`;

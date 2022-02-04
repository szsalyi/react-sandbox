import styled from 'styled-components';
import { screenSize } from '../theme/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${screenSize.tablet} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

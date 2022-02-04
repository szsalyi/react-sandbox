import styled from 'styled-components';
import { screenSize } from '../../theme/theme';

export const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: 100%;
  align-items: center;
`;

export const EventsTitle = styled.label`
  font-weight: 400;
  color: #fff;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 5px;
  width: 90%;
  @media ${screenSize.tablet} {
    text-align: center;
  }
`;

import styled from 'styled-components';
import { BsFillHeartFill } from 'react-icons/bs';

export const HeartIcon = styled(BsFillHeartFill)`
  color: ${(props) => props.theme.secondary};
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  font-size: 14px;
  line-height: 16px;
`;

export const InfoTitle = styled.span`
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.textColors.secondary};
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.cardBackground.primaryLight};
  padding: 20px;
`;

export const NoOfferTitle = styled.span`
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.error};
`;

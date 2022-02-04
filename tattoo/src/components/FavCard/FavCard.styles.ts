import styled from 'styled-components';
import { ImHeartBroken } from 'react-icons/im';

export const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 20px;
  width: 75%;
  box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.1);
  background-color: ${(props) => props.theme.cardBackground.primary};
`;

export const HeartBrokenIcon = styled(ImHeartBroken)`
  color: ${(props) => props.theme.error};
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

export const FavTitle = styled.span`
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.textColors.primary};
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

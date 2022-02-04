import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
  height: 50px;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.1);
  background-color: ${(props) =>
    props.selected ? props.theme.cardBackground.primary : props.theme.cardBackground.primaryLight};
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.selected
        ? props.theme.cardBackground.primaryLight
        : props.theme.cardBackground.secondary};
  }
`;

export const InfoTitle = styled.span`
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 2px;
  color: ${(props) => props.theme.textColors.secondary};
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

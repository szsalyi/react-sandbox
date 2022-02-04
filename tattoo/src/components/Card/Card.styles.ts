import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.cardBackground.primaryLight};
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
  box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.1);
`;

export const CardTitle = styled.label`
  font-weight: 400;
  color: ${(props) => props.theme.textColors.titleColor};
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

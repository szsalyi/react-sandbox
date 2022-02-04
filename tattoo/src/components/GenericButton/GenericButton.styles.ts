import styled from 'styled-components';

export const ButtonContainer = styled.div``;

export const Button = styled.button<{ disabled?: boolean }>`
  height: 30px;
  width: 200px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.buttonColors.borderColor};
  background-color: ${(props) =>
    props.disabled ? props.theme.buttonColors.disabled : props.theme.buttonColors.backgroundColor};
  &:hover {
    background-color: ${(props) => props.theme.buttonColors.hover.backgroundColor};
    border: 1px solid ${(props) => props.theme.buttonColors.hover.borderColor};
  }
`;

export const ButtonLabel = styled.label`
  color: ${(props) => props.theme.buttonColors.labelColor};
`;

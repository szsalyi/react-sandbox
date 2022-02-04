import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchInputElement = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: ${(props) => props.theme && `1px solid ${props.theme.input.backgroundColor}`};
  background-color: ${(props) => props.theme.input.backgroundColor};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${(props) => props.theme.primaryVar};
  }
`;

export const ErrorLabel = styled.label`
  font-weight: 400;
  color: ${(props) => props.theme.error};
  font-size: 10px;
  padding-left: 2px;
  width: 100%;
  padding-top: 2px;
`;

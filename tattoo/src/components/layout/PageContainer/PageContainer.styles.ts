import styled from 'styled-components';

export const PageContainerElement = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.pageBackground};
`;

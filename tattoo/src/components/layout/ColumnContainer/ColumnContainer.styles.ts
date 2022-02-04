import styled from 'styled-components';

export const ColumnContainerElement = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.pageBackground};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

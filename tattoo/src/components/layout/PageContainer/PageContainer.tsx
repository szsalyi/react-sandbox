import React from 'react';
import { PageContainerElement } from './PageContainer.styles';

export const PageContainer: React.FC = ({ children }) => {
  return <PageContainerElement>{children}</PageContainerElement>;
};

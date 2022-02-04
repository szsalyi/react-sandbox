import React from 'react';

import {
  CustomLoader,
  LoaderContainer,
  LoaderWrapper,
  LoaderMessage,
} from './FullScreenLoader.styles';

export interface FullScreenLoaderProps {
  loading: boolean;
  message?: string;
}

export const FullScreenLoader: React.FC<FullScreenLoaderProps> = (props) => {
  return props.loading ? (
    <LoaderContainer>
      <LoaderWrapper>
        <CustomLoader />
        <LoaderMessage>{props.message}</LoaderMessage>
      </LoaderWrapper>
    </LoaderContainer>
  ) : null;
};

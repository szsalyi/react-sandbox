import React from 'react';
import { ButtonContainer, Button, ButtonLabel } from './GenericButton.styles';

export interface GenericButtonProps {
  title: string;
  loading?: boolean;
  onClick: () => void;
}

export const GenericButton: React.FC<GenericButtonProps> = (props) => {
  return (
    <ButtonContainer data-testid="button">
      <Button onClick={props.onClick} disabled={props.loading}>
        <ButtonLabel>{props.loading ? 'Loading...' : props.title}</ButtonLabel>
      </Button>
    </ButtonContainer>
  );
};

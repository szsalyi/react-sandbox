import React from 'react';
import { CardElement, Container, CardTitle } from './Card.styles';

export interface CardProps {
  title?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <CardElement>
      {props.title && <CardTitle>{props.title}</CardTitle>}
      <Container>{props.children}</Container>
    </CardElement>
  );
};

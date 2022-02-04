import React from 'react';
import { StepperContainer, Stepp, SteppTitle } from './Stepper.styles';

const steps = [
  {
    title: '1. Artist',
  },
  {
    title: '2. Event',
  },
  {
    title: '3. Favourites',
  },
];

export interface StepperPorps {
  activeStepIndex: number;
}

export const Stepper: React.FC<StepperPorps> = (props) => {
  return (
    <StepperContainer>
      {steps.map((step, index) => (
        <Stepp key={index} selected={index === props.activeStepIndex}>
          <SteppTitle selected={index === props.activeStepIndex}>{step.title}</SteppTitle>
        </Stepp>
      ))}
    </StepperContainer>
  );
};

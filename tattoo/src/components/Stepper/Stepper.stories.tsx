import { Stepper, StepperPorps } from './Stepper';
import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { themes } from '../../theme/theme';

export default {
  title: 'Stepper',
  component: Stepper,
} as Meta;

const Template: Story<StepperPorps> = (args) => {
  return (
    <ThemeProvider theme={themes['dark']}>
      <Stepper {...args} />
    </ThemeProvider>
  );
};

export const HeaderStory = Template.bind({});

HeaderStory.storyName = 'Stepper';
HeaderStory.args = {
  activeStepIndex: 0,
};

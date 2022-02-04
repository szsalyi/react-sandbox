import styled from 'styled-components';
import { BounceLoader } from 'react-spinners';
import { themes } from '../../theme/theme';

export const CustomLoader = styled(BounceLoader).attrs({
  color: themes['light'].primaryVar,
})``;

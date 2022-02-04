import React from 'react';
//import { useClickInsideListenerRef } from '../../../hooks/useClickInsideListener.hook';
import { ColumnContainerElement } from './ColumnContainer.styles';

interface ColumnContainerProps {
  columnId: 'search' | 'selected' | 'favourites';
  disabled?: boolean;
  backGroundColor?: string;
}

export const ColumnContainer: React.FC<ColumnContainerProps> = (props) => {
  /* const ref = useClickInsideListenerRef(
    () => props.disabled === true && window.alert(`clicked ${props.columnId}`)
  ); */

  return (
    <ColumnContainerElement
      backgroundColor={props.backGroundColor}
      /* ref={ref} */
      disabled={props.disabled}
    >
      {props.children}
    </ColumnContainerElement>
  );
};

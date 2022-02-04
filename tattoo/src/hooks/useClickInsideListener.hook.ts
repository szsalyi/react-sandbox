/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef } from 'react';

export const useClickInsideListenerRef = (callBack: () => void) => {
  const ref = useRef(null);
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if ((ref.current! as any).contains(e.target)) {
        callBack?.();
      }
    },
    [ref.current]
  );
  useEffect(() => {
    document.addEventListener('click', clickListener);
    return () => {
      document.removeEventListener('click', clickListener);
    };
  }, []);
  return ref;
};

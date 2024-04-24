import { useEffect } from 'react';

export const useListener = (
  node: any,
  eventName: string,
  callback: (e: any) => void,
  condition: boolean,
) => {
  useEffect(() => {
    if (condition) {
      window.addEventListener(eventName, callback, false);

      return () => {
        window.removeEventListener(eventName, callback, false);
      };
    }
  }, [condition]);
};

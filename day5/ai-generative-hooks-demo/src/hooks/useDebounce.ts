import { useRef, useEffect, useMemo } from 'react';

export function useDebounce<T extends (...args: any[]) => void>(callback: T, delay: number): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // useMemo so returned function is stable across renders unless delay changes
  return useMemo(() => {
    let timer: number | undefined;
    return ((...args: any[]) => {
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => callbackRef.current(...args), delay);
    }) as T;
  }, [delay]);
}

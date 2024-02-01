import {
  useCallback,
  useEffect,
  useRef,
} from "react";

export function useInterval(cb: () => void, ms: number) {
  const intervalRef = useRef<number | undefined>(undefined);
  const savedCallbackRef = useRef(cb)
  
  const handleClearInterval = useCallback(() => {
    window.clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    savedCallbackRef.current = cb
  }, [cb])

  useEffect(() => {
    const tick = () => savedCallbackRef.current();
    intervalRef.current = window.setInterval(tick, ms);

    return handleClearInterval;
  }, [ms, handleClearInterval]);

  return handleClearInterval;
}

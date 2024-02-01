import { useState, useCallback } from "react";

type CounterOptions = {
  min: number;
  max: number;
};

export function useCounter(startingVal = 0, options: CounterOptions) {
  const { min, max } = options;
  const [count, setCount] = useState(startingVal);

  if (startingVal < min || startingVal > max) {
    throw new Error(`Value must be between ${min} and ${max}`);
  }

  const increment = useCallback(() => {
    setCount((c) => {
      const nextCount = c + 1;
      if (nextCount > max) {
        return c;
      }
      return nextCount;
    });
  }, [max]);

  const decrement = useCallback(() => {
    setCount((c) => {
      const nextCount = c - 1;
      if (nextCount < min) {
        return c;
      }
      return nextCount;
    });
  }, [min]);

  const set = useCallback(
    (nextCount: number) => {
      setCount((c: number) => {
        if (nextCount < min || nextCount > max) {
          return c;
        }

        return nextCount;
      });
    },
    [min, max]
  );

  const reset = useCallback(() => {
    setCount(startingVal);
  }, [startingVal]);

  return [count, { increment, decrement, set, reset }] as const;
}

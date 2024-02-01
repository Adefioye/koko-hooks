import { useState } from "react";

export function usePrevious(value: any) {
  const [current, setCurrent] = useState(value);
  const [previous, setPrevious] = useState(null);

  if (value !== current) {
    setCurrent(value);
    setPrevious(current);
  }

  return previous;
}
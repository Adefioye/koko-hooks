import { useEffect, useState } from "react";

export function useDefault(initialValue: any, defaultValue: any) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    if (state === null || state === undefined) {
      setState(defaultValue);
    }
  }, [state, defaultValue]);

  return [state, setState];
}

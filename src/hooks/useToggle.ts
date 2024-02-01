import { useCallback, useState } from "react";

export function useToggle(initialValue: any) {
  const [on, setOn] = useState(!!initialValue);

  const handler = useCallback((value: any) => {
    if (typeof value === "boolean") {
      return setOn(value);
    }
    return setOn((v) => !v);
  }, []);

  return [on, handler];
}

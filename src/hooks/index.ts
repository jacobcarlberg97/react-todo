import { useState } from "react";

export default function useToggle(initialValue: boolean): any {
  const [value, setValue] = useState(initialValue);

  function toggleValue(value: boolean) {
    return setValue((currentValue) => (typeof value === "boolean" ? value : !currentValue));
  }

  return [value, toggleValue];
}

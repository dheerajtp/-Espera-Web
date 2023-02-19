import { useState } from "react";

export const useBottomNav = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const setNewValue = (newValue) => {
    setValue(newValue);
  };

  return [value, setNewValue];
};

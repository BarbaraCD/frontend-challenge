import { useState } from "react"

export function UseLocalStorage<T>(item: string) {
  let storedValue = localStorage.getItem(item);
  let initialValue: T;

  try {
    initialValue = storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    initialValue = null;
  }

  const [value, setValue] = useState<T>(initialValue);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return { value, updateLocalStorage };
}

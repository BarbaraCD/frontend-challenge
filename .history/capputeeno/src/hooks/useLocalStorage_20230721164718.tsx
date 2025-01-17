import { useState } from "react"

export function UseLocalStorage<T>(item: string) {
  const storedValue = localStorage.getItem(item);
  const initialValue = storedValue ? JSON.parse(storedValue) : '';

  const [value, setValue] = useState<T>(initialValue);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue)); // Salve em formato JSON
  };

  return { value, updateLocalStorage };
}

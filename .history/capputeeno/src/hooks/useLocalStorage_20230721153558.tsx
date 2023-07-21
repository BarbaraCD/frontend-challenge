import { useState } from "react";

export function UseLocalStorage(item: string){
  const [value, setValue] = useState(localStorage.getItem('item'))

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(JSON.stringify(newValue))
  }
}
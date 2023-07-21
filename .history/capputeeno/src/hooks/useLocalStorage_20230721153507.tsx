import { useState } from "react";

export function UseLocalStorage(item: string){
  const [value, setValue] = useState(localStorage.getItem('item'))
}
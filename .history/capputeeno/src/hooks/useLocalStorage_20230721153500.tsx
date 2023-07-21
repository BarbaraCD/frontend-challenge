import { useState } from "react";

export function UseLocalStorage(){
  const [value, setValue] = useState(localStorage.getItem('item'))
}
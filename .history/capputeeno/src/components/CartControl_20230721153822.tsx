import { UseLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";

export function CartControl(){
  const { value } = UseLocalStorage('cart-items')
  return(
    <div>
      <CartIcon />
    </div>
  )
}
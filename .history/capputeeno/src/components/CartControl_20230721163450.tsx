import {  useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import { styled } from "styled-components"

const CartCount = styled.span`
  width: 17px;
  height: 17px;

  background-color: var(--delete-color);
  color: white;

  position: absolute;
  right: -10px;
  top: 50%;
`

const Container = styled.div`
  position: relative;
`

export function CartControl(){
  const { value } = useLocalStorage('cart-items')
  return(
    <div>
      <CartIcon/>
      {value.length && <CartCount>{value.length}</CartCount>}
    </div>
  )
}
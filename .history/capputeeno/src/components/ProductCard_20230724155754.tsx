import { styled } from "styled-components"

interface ProductCardProps {
  image: string,
  title: string,
  price: number,
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
`

export function ProductCard(props: ProductCardProps){
  return (
    <></>
  )
}
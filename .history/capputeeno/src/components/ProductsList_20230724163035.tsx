"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./ProductCard"
import styled from "styled-components"

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export function ProductsList(){
  const { data } = useProducts()
  return(
    <div>
      {data?.map(product => <ProductCard 
      key={product.id}
        title={product.name} 
        price={product.price_in_cents} 
        image={product.image_url} 
        />
      )}
    </div>
  )
}
"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./ProductCard"

interface ProductsListProps{}

export function ProductsList(prosp: ProductsListProps){
  const { data } = useProducts()
  return(
    <div>
      {data?.map(product => <ProductCard 
        title={product.name} 
        price={product.price_in_cents} 
        image={product.image_url} 
        />
      )}
    </div>
  )
}
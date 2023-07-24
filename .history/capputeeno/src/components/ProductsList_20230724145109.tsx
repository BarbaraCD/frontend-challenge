import { useProducts } from "@/hooks/useProducts"

interface ProductsListProps{}

export function ProductsList(prosp: ProductsListProps){
  const { data } = useProducts()
  return(
    <></>
  )
}
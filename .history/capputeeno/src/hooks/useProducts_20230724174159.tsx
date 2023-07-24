import { ProductsFetchResponse } from '@/types/ProductsResponse'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { useFilter } from './useFilter'
import { FilterType } from '@/types/FilterTypes'
import { getCategoryByType } from '@/utils/getCategoryByType'
import { PriorityType } from '@/types/PriorityTypes'
import { getFieldByPriority } from '@/utils/GraphqlFilters'
import { Sorts_Mill_Goudy } from 'next/font/google'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, {query})
}

const mountQuery = (type: FilterType, priority: PriorityType) => {
  if(type === FilterType.ALL && priority === PriorityType.POPULARITY) return `query{
    allProducts(sortField: "sales", sortOrder: "DSC") {
      id
      name
      price_in_cents
      image_url
    }
  }
`
  const sortSettings = getFieldByPriority(priority)
  return `query{
    allProducts(filter: {category: "${getCategoryByType(type)}"}, sortField:" ${sortSettings.field}", sortOrder: ${sortSettings.order} ){
      id
      name
      price_in_cents
      image_url
    }
  }

  `
}

export function useProducts(){
  const { type, priority } = useFilter()
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products']
  })

  return {
    data: data?.data?.data?.allProducts
  }
}
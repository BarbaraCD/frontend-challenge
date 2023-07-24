import { ProductsFetchResponse } from '@/types/ProductsResponse'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { useFilter } from './useFilter'
import { FilterType } from '@/types/FilterTypes'

import { PriorityType } from '@/types/PriorityTypes'
import { getCategoryByType, getFieldByPriority } from '@/utils/GraphqlFilters'
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
  const categoryFilter = getCategoryByType(type)
  return `query{
    allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: {category: "${categoryFilter}"`: ''}){
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
    queryKey: ['products', type, priority]
  })

  return {
    data: data?.data?.data?.allProducts
  }
}
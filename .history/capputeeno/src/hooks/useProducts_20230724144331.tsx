import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = () => {
  return axios.post(
    API_URL,
    `query{
      allProducts{
        id
        name
        price_in_cents
      }
    }
  `)
}

export function useProducts(){
  const {} = useQuery({
    queryFn: () => {},
    queryKey: ['products']
  })
}
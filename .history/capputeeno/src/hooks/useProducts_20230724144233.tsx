import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetcher = () => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL,`
    query{
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
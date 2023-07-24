import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetcher = () => {
  return axios.post()
}

export function useProducts(){
  const {} = useQuery({
    queryFn: () => {},
    queryKey: ['products']
  })
}
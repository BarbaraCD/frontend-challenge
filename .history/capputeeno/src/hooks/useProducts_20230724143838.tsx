import { useQuery } from '@tanstack/react-query'

export function useProducts(){
  const {} = useQuery({
    queryFn: () => {},
    queryKey: ['products']
  })
}
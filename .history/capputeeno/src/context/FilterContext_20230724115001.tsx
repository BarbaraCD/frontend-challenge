import { FilterType } from '@/types/FilterTypes'
import { createContext, useState } from 'react'

const filterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL
})

export function FilterContextProvider(){
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterType.ALL)
  return(

  )
}
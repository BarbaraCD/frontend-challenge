import { FilterTypes } from '@/types/FilterTypes'
import { createContext, useState } from 'react'

const filterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL
})

export function FilterContextProvider(){
  const [search, setSearch] = useState('')
  const [page, setPage] = useState('')
  const [type, setType] = useState('')
  return(

  )
}
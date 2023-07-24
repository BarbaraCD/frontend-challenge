"use client"

import { FilterByType } from "./FilterByType";

interface FilterBarProps{}

export function FilterBar(props: FilterBarProps){
  return(
    <div>
      <FilterByType />
    </div>
  )
}
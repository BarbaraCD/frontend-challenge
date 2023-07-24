import styled from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"

interface FilterByPriorityProps{

}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  p{
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const PriorityFilter = styled.div`

`

export function FilterByPriority(props: FilterByPriorityProps){
  const [] = useState(false)
  return(
    <FilterContainer>
      <p>
        Organizar por
        <ArrowIcon/>
      </p>
    </FilterContainer>
  )
}
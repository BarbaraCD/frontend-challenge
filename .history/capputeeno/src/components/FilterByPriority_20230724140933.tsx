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

const PriorityFilter = styled.ul`
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;

  list-style: none;
`

export function FilterByPriority(props: FilterByPriorityProps){
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(prev => !prev)

  return(
    <FilterContainer>
      <p >
        Organizar por
        <ArrowIcon/>
      </p>
      {isOpen && 
        <PriorityFilter>

        </PriorityFilter>
      }
    </FilterContainer>
  )
}
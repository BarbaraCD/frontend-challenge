import styled from "styled-components"

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
  }
`

export function FilterByPriority(props: FilterByPriorityProps){
  return(
    <FilterContainer>
      <p>Organizar por</p>
    </FilterContainer>
  )
}
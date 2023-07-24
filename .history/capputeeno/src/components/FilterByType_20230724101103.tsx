import styled from "styled-components"

interface FilterByTypeProps{}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

const FilterItems = styled.li`
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
`

export function FilterByType(props: FilterByTypeProps){
  return(
    <FilterList>
      <FilterItems>Todos os produtos</FilterItems>
      <FilterItems>Camisetas</FilterItems>
      <FilterItems>Canecas</FilterItems>
    </FilterList>
  )
}
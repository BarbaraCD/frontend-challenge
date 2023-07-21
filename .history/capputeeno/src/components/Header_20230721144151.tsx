import { styled } from "styled-components"

interface HeaderProps{

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export function Header(props: HeaderProps){
  return(
    <header>
      <div></div>
      <div></div>
    </header>
  )
}
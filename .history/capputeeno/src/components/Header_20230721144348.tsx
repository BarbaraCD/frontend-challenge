import { styled } from "styled-components"

interface HeaderProps{

}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`

const Logo = styled.a`
  color: var(--logo-color)
`

export function Header(props: HeaderProps){
  return(
    <TagHeader>
      <div></div>
      <div></div>
    </TagHeader>
  )
}
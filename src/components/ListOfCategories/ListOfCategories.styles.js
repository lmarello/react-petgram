import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const Item = styled.li`
  list-style: none;
  padding: 0 8px;
`

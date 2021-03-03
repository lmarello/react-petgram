import React from 'react'
import { GlobalStyle } from './styles/Global.styles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)

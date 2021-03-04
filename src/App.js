import React from 'react'
import { GlobalStyle, AppWrapper } from './styles/Global.styles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Header } from './components/Header'

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <AppWrapper>
      <ListOfCategories />
      <ListOfPhotoCards />
    </AppWrapper>
  </>
)

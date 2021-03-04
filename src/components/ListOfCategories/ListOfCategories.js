import React from 'react'
import { Category } from '../Category'
import { List, Item } from './ListOfCategories.styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()

  if (loading) return <div>Cargando...</div>

  return (
    <List>
      {categories.map((category) => {
        const { cover, emoji, path } = category
        const props = { cover, emoji, path }

        return (
          <Item key={category}>
            <Category {...props} />
          </Item>
        )
      })}
    </List>
  )
}

import React from 'react'
import { Category } from '../Category'
import { List, Item } from './ListOfCategories.styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
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

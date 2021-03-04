import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './ListOfPhotoCards.styles'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((photoCard) => (
        <li key={photoCard}>
          <PhotoCard id={photoCard} />
        </li>
      ))}
    </List>
  )
}

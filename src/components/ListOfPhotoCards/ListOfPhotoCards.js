import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      <li>
        {[1, 2, 3].map((photoCard) => (
          <PhotoCard key={photoCard} />
        ))}
      </li>
    </ul>
  )
}

import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { PhotoCard } from '../PhotoCard'
import { List } from './ListOfPhotoCards.styles'

const query = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(query)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <List>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </List>
  )
}

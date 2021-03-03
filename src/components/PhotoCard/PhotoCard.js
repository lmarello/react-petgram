import React from 'react'
import { ImgWrapper, Img, Button } from './PhotoCard.styles'
import { MdFavoriteBorder } from 'react-icons/md'

const TMP =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = TMP }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size={24} />
        {likes} likes!
      </Button>
    </article>
  )
}

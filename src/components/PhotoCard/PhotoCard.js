import React from 'react'
import { ImgWrapper, Img, Button, Article } from './PhotoCard.styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const NO_IMAGE =
  'https://res.cloudinary.com/devixuds6/image/upload/v1614891644/petgram/no-image_ovsn7p.png'

export const PhotoCard = ({ id, src = NO_IMAGE, likes = 0 }) => {
  const localStorageKey = `like-${id}`
  const [liked, setLiked] = useLocalStorage(localStorageKey, false)
  const [show, element] = useNearScreen(false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(localStorageKey, !liked)}>
            <Icon size={24} />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './PhotoCard.styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const TMP =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, src = TMP, likes = 0 }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  const localStorageKey = `like-${id}`
  const [liked, setLiked] = useLocalStorage(localStorageKey, false)

  useEffect(() => {
    Promise.resolve(
      typeof (window.IntersectionObserver !== 'undefined')
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
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

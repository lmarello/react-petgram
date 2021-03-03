import React from 'react'
import { DEFAULT_IMAGE } from '../../constants/defaultImage'
import { Anchor, Image } from './Category.styles'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)

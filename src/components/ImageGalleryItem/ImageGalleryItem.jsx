import React from 'react'
import { Img, StyledItem } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ galleryItemData, openModal }) => {
  const { tags, webformatURL } = galleryItemData;

  const chooseImage = () => {
    openModal(galleryItemData)
  }
  
  return (
    <StyledItem >
        <Img alt={tags} src={webformatURL} onClick={chooseImage}/>
    </StyledItem>
  )
}

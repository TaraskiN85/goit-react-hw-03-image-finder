import React from 'react'
import { Img, StyledItem } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ galleryItemData, handleChooseImage, handleModal }) => {
  const { tags, webformatURL } = galleryItemData;

  const chooseImage = () => {
    handleChooseImage(galleryItemData)
    handleModal()
  }
  
  return (
    <StyledItem >
        <Img alt={tags} src={webformatURL} onClick={chooseImage}/>
    </StyledItem>
  )
}

import React from 'react'
import { Ul } from './ImageGallery.styled'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({galleryData, handleChooseImage, handleModal}) => {

    return (
      <div>
        <Ul>
          {galleryData.map(image => {
            return <ImageGalleryItem galleryItemData={image} key={image.id} handleChooseImage={handleChooseImage} handleModal={handleModal} />
          })}
        </Ul>
      </div>
    )
}

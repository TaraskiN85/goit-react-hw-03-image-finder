import React from 'react'
import { Ul } from './ImageGallery.styled'
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({galleryData, openModal}) => {

    return (
      <div>
        <Ul>
          {galleryData.map(image => {
            return <ImageGalleryItem galleryItemData={image} key={image.id}  openModal={openModal} />
          })}
        </Ul>
      </div>
    )
}

import React, { Component } from 'react'
import { Overlay, ImageContainer, Image } from './Modal.styled'

export class Modal extends Component {
  
  closeModal = () => {
    this.props.handleModal()
  }
  
  render() {
    const url = this.props.imageData.largeImageURL
    
    return (
      <Overlay onClick={this.closeModal}>
        <ImageContainer>
          <Image src={url} alt='image' />
        </ImageContainer>
      </Overlay>
    )
  }
}

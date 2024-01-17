import React, { Component } from 'react'
import { Overlay, ImageContainer, Image } from './Modal.styled'

export class Modal extends Component {
  
  closeModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal()
    }
  }

  handleKeyPress = (e) => {
    if (e.code === "Escape") {
      this.props.handleModal()
    }
  }
  
  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.handleKeyPress)
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

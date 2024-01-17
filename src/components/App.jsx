import { Component } from 'react';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { ErrorMessage } from './Error/Error'

import { fetchImages } from './services/api';

import css from './App.module.css'

export class App extends Component {

  state = {
    images: [],
    page: 1,
    keyword: '',
    isLoading: false,
    canLoad: false,
    error: '',
    isImageChosen: false,
    imageData: {},
  }

  handleSearch = async (keyword) => {

    this.setState(() => {
      return {
        keyword,
        page: 1,
        images: [],
      }
    })
  }  

  componentDidUpdate = async (prevProps, prevState) => {
    const { page, keyword } = this.state

    if (prevState.keyword !== keyword || prevState.page !== page) {
      try {
      this.setState({ isLoading: true, error: '' })
      const searchedData = await fetchImages(keyword, page);

      const searchedImages = searchedData.data.hits.map(image => {
        return { id: image.id, largeImageURL: image.largeImageURL, webformatURL: image.webformatURL, tags: image.tags}
      })

      this.setState((prevState) => {
        return {
          isLoading: false,
          canLoad: page < Math.ceil(searchedData.data.totalHits / 12),
          images: [...prevState.images, ...searchedImages],
        }
      })
    } catch (error) {
        this.setState({ error: error.message })
      } finally {
        this.setState({ isLoading: false })
    }}
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }))
  }

  openModal = (imageData) => {
    this.setState({ isImageChosen: true, imageData })
  }

  closeModal = () => {
    this.setState({ isImageChosen: false, imageData: {} })
  }

  handleChooseImage = (imageData) => {
    this.setState(() => { 
      return {imageData}
    })
  }
  
  render() {

    const { images, isLoading, error, imageData, isImageChosen, canLoad } = this.state
    return (
      <div className={css.appcontainer}>
        <Searchbar handleSearch={this.handleSearch} />
        {images.length > 0 && <ImageGallery galleryData={images} openModal={this.openModal} />}
        {isLoading && <Loader />}
        {error && <ErrorMessage error={error}/>}

        {canLoad && <Button handleLoadMore={this.handleLoadMore} />}
        {isImageChosen && <Modal imageData={imageData} closeModal={this.closeModal} />}
      </div>
    );
  }
};

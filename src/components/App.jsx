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
        isLoading: true,
        page: 1,
        images: [],
      }
    })
  }  

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.keyword !== this.state.keyword || prevState.page !== this.state.page) {
      try {
      const searchedData = await fetchImages(this.state.keyword, this.state.page);
      console.log(searchedData);
      const searchedImages = searchedData.data.hits.map(image => {
        return { id: image.id, largeImageURL: image.largeImageURL, webformatURL: image.webformatURL, tags: image.tags}
      })

      this.setState((prevState) => {
        return {
          isLoading: false,
          canLoad: this.state.page < Math.ceil(searchedData.data.totalHits / 12),
          images: [...prevState.images, ...searchedImages],
        }
      })
    } catch (error) {
      this.setState({ error: error.message })
    }}
  }

  handleLoadMore = () => {
    this.setState((prevState) => { 
      return {
        page: prevState.page + 1
      }
    })
  }

  handleModal = () => {
    this.setState((prevState) => {
      return {isImageChosen: !prevState.isImageChosen}
    })
  }

  handleChooseImage = (imageData) => {
    this.setState(() => { 
      return {imageData}
    })
  }
  
  render() {
    return (
      <div className={css.appcontainer}>
        <Searchbar handleSearch={this.handleSearch} />
        {this.state.isLoading ? <Loader /> : <ImageGallery galleryData={this.state.images} handleChooseImage={this.handleChooseImage} handleModal={this.handleModal} />}
        {this.state.error && <ErrorMessage error={this.state.error}/>}

        {this.state.canLoad && <Button handleLoadMore={this.handleLoadMore} />}
        {this.state.isImageChosen && <Modal imageData={this.state.imageData} handleModal={this.handleModal} />}
      </div>
    );
  }
};

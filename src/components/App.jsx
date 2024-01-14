import { Component } from 'react';
import css from './App.module.css'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {

  state = {
    images: [],
    page: 1,
    keyword: '',
    isLoading: false,
    canLoad: false,
    isImageChosen: false,
    imageData: {},
  }

  
  handleSearch = async (keyword) => {
    const API_KEY = '40561275-509fd25e8eff038878750ce8a';

    this.setState(() => {
      return {
        keyword,
        isLoading: true,
      }
    })
    
    const searchedData = await axios.get(`https://pixabay.com/api/?q=${keyword}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`)

    this.setState(() => {
      return {
        isLoading: false,
      }
    })

    const searchedImages = searchedData.data.hits.map(image => {
      return { id: image.id, largeImageURL: image.largeImageURL, webformatURL: image.webformatURL, tags: image.tags}
    })

    this.setState(() => {
      return {
        canLoad: this.state.page < Math.ceil(searchedData.data.totalHits / 12)
      }
    })

    this.setState(() => {
      return {
        images: searchedImages
      }
    })
  }

  resetState = () => this.setState({ page: 1 })

  handleLoadMore = () => {
    this.setState((prevState) => { 
      return {
        page: prevState.page + 1
      }
    })
    this.handleSearch(this.state.keyword)
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
        <Searchbar handleSearch={this.handleSearch} resetState={this.resetState}/>
        {this.state.isLoading ? <Loader/> : <ImageGallery galleryData={this.state.images} handleChooseImage={this.handleChooseImage} handleModal={this.handleModal} />}

        {this.state.canLoad && <Button handleLoadMore={this.handleLoadMore} />}
        {this.state.isImageChosen && <Modal imageData={this.state.imageData} handleModal={this.handleModal} />}
      </div>
    );
  }
};

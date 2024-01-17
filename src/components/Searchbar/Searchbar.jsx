import React from 'react'
import { Form, Input, Container, Button, Icon } from './Searchbar.styled'

export const Searchbar = ({handleSearch}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const keyword = e.currentTarget.elements.imgSearch.value.trim()
    if (keyword.length > 0) {
      handleSearch(keyword)
      e.currentTarget.reset()
      return
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Button type="submit" >
            <Icon src={require('../../img/search-icon.svg').default} alt='mySvgImage'/>
          </Button>
          <Input type="search" name='imgSearch'/>
        </Container>
      </Form>
    </>
  )
}
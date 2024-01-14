import React from 'react'
import { LoadMoreButton } from './Button.styled'

export const Button = ({ handleLoadMore}) => {

  const handleClick = () => {
    handleLoadMore();
  }
  return (
    <>
      <LoadMoreButton type="submit" onClick={handleClick}>
        LoadMore
      </LoadMoreButton>
    </>
  )
}
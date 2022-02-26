import React from 'react'
import styled from 'styled-components'
import SingleCat from './SingleCat'
import {cars, category} from './data'
const Container = styled.div`
    border: 2px solid #000000;
    border-radius: 15px;
`
const CarPhotos = () => {
  return (
    <Container className='mx-2 p-2 d-flex flex-column justify-content-center align-items-center'>
      <h2>Car Catagories</h2>
      {
        category.map((cat)=>{
          return <SingleCat image={cat.image} cat={cat.cat} key={cat.id} />
        })
      }
    </Container>
  )
}

export default CarPhotos
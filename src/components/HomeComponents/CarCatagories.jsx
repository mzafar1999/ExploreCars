import React from 'react'
import styled from 'styled-components'
import SingleCat from './SingleCat'
import { category} from './data'
const Container = styled.div`
    /* border: 3px solid #421445; */
    /* border-radius: 15px; */
`
const CarPhotos = () => {
  return (
    <Container className='mx-2 p-2 d-flex flex-column justify-content-center align-items-center'>
      <h1 style={{color:'#421445',borderBottom:'2px solid #421445'}}>Car Catagories</h1>
      {
        category.map((cat)=>{
          return <SingleCat image={cat.image} cat={cat.cat} key={cat.id} />
        })
      }
    </Container>
  )
}

export default CarPhotos
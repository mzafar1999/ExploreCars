import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const Container = styled.div`
    border: 2px solid #79fdf7;
    border-radius: 15px;
`
const CarInfo = () => {
  const cars = useSelector(state=>state.cars)
  const [car, setCar] = useState({})
  
  return (
    <Container className='mx-2 p-2'>

    </Container>
  )
}

export default CarInfo
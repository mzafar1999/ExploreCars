import React from 'react'
import styled from 'styled-components'
import { cars } from './data'
import SingleCarListComp from './SingleCarListComp'


const Container = styled.div`
    border: 2px solid #79fdf7;
    border-radius: 15px;
`

const CarList = () => {
  return (
    <Container className='mx-2 p-2'>
        {cars.map((car)=>{
            return (<SingleCarListComp key={car.id} title={car.name} image={car.img} />)
        })}
    </Container>
  )
}

export default CarList
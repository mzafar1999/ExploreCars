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
    <Container className='mx-2 px-2'>
        {cars.map((car)=>{
            return (<SingleCarListComp key={car.id} title={car.name} image={car.imgtumbnail} />)
        })}
    </Container>
  )
}

export default CarList
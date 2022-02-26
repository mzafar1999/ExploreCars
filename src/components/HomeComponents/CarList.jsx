import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import SingleCarListComp from './SingleCarListComp'
import { deleteCar, selectCurrentCar } from '../../Redux/carsSlice'

const Container = styled.div`
    border: 2px solid #000000;
    border-radius: 15px;
`


const CarList = () => {
  const cars = useSelector(state=>state.cars.allCars)
  const dispatch = useDispatch()
  const selectCar = (id)=>{
    let findCar = cars.find((car)=>{
      return car.id === id
    })
    dispatch(selectCurrentCar(findCar))
  }
	const handleDelete = (id)=>{
	dispatch(deleteCar(id))    
  }
  return (
    <Container className='mx-2 px-2 '>
        {cars.map((car)=>{
            return (
            <SingleCarListComp key={car.id} deleteCar={handleDelete}  selectCar={selectCar} carId={car.id} title={car.name} image={car.imgtumbnail} />
            )
        })}
    </Container>
  )
}

export default CarList
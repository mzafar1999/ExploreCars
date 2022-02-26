import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import SingleCarListComp from './SingleCarListComp'
import { deleteCar, selectCurrentCar } from '../../Redux/carsSlice'

const Container = styled.div`
     @media (max-width:940px) {
       height: 14em;
}
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
            <h1 style={{color:'#421445',borderBottom:'2px solid #421445'}}>Cars List</h1>

        {cars.map((car)=>{
            return (
            <SingleCarListComp key={car.id} deleteCar={handleDelete}  selectCar={selectCar} carId={car.id} title={car.name} image={car.imgtumbnail} />
            )
        })}
    </Container>
  )
}

export default CarList
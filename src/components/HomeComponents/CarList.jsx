import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import SingleCarListComp from './SingleCarListComp'
import {  selectCurrentCar } from '../../Redux/carsSlice'

const Container = styled.div`
     @media (max-width:940px) {
       height: 14em;
}
`
const CarList = () => {
  const cars = useSelector(state=>state.cars.allCars)
  const filteredCars = useSelector(state=>state.cars.filteredCarsCatagory)
  const dispatch = useDispatch()
  const selectCar = (id)=>{
    let findCar = cars.find((car)=>{
      return car.id === id
    })
    dispatch(selectCurrentCar(findCar))
  }
	

  if(filteredCars.length>0){
    return (
      <Container className='mx-2 px-2 '>
              <h1 style={{color:'#421445',borderBottom:'2px solid #421445'}}>Cars List</h1>
  
          {filteredCars.map((car)=>{
              return (
              <SingleCarListComp key={car.id} filtered={true} selectCar={selectCar} carId={car.id} title={car.name} image={car.imgtumbnail} />
              )
          })}
      </Container>
    )
  }
  
 else{
    return (
      <Container className='mx-2 px-2 '>
              <h1 style={{color:'#421445',borderBottom:'2px solid #421445'}}>Cars List</h1>
  
          {cars.map((car)=>{
              return (
              <SingleCarListComp key={car.id}  selectCar={selectCar} carId={car.id} title={car.name} image={car.imgtumbnail} />
              )
          })}
      </Container>
    )
  }

  
}

export default CarList
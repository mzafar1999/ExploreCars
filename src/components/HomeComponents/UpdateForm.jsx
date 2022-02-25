import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { updateCarInfo } from '../../Redux/carsSlice';
import { Container,Title } from "./CarInfo";
const UpdateFormDiv = styled.div`
  
`
const Input = styled.input`
  
`
const UpdateForm = () => {
    const location = useLocation()
    const carId = parseInt(location.pathname.split('/')[2])
    const allCars = useSelector(state=>state.cars.allCars)
    const currentCar = allCars.find((car)=>car.id===carId)

    
    const [newDataOfCar, setNewDataOfCar] = useState({
        engine:"",
        transmission:"",
        fuelType:""
    })
    const handleChange = (e)=>{
        setNewDataOfCar({
            ...newDataOfCar,
            [e.target.name]:e.target.value
        })
    }
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(updateCarInfo({newDataOfCar,currentCar}))
    }
    
  return (
    <Container className='container mt-3 mx-2 p-2 d-flex flex-column justify-content-center mx-auto '>
    <Title className='h6 display-6 mt-3 mx-auto'>
       Update Car Info:
     </Title>
     <UpdateFormDiv className='form-group d-flex flex-column justify-content-center'>
       <Input name='engine' onChange={handleChange} placeholder='Enter new info of Engine ' className='form-control w-50 mt-2 mx-auto'/>
       <Input name='transmission' onChange={handleChange}  placeholder='Enter new info of Transmission' className='form-control w-50 mt-2 mx-auto'/>
       <Input name='fuelType' onChange={handleChange}  placeholder='Enter new info of Fuel Type' className='form-control w-50 mt-2 mx-auto'/>
       <button className='btn btn-primary w-25 mx-auto mt-3' onClick={handleClick}>Update</button>
     </UpdateFormDiv>
    </Container>
  )
}

export default UpdateForm

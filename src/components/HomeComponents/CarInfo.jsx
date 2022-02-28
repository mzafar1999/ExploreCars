import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {  initialCar } from '../../Redux/carsSlice'
export const Container = styled.div`
    border: 2px solid #421445;
    border-radius: 15px;
`
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width:1240px) {
	
	}
`
const ImageWrapper = styled.div`
    flex: 1;
    height: 300px;
    width: 400px;
    @media (max-width:1240px) {
      height: 150px;
    width: 200px;
}
`
const Image = styled.img`
  width: 100%;
  height:100%;
  object-fit: contain;

`
const TitleWrapper = styled.div`
    flex: 1;
`
export const Title = styled.h1`
    
`
const SubTitle = styled.h4`
  color: gray;
`

const Details = styled.div`
  border-top: 1px solid gray;
`
const SpecWrapper = styled.div`

`


 
const CarInfo = () => {
  let currentCar = useSelector(state=>state.cars.currentCar)
  let allCars = useSelector(state=>state.cars.allCars)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialCar(allCars[0]))
  }, [allCars,dispatch])
  
  


  
  return (
    <>
    <Container className='mx-2 p-2'>
     {currentCar ? <> <InfoWrapper>
        <ImageWrapper>
          <Image src={currentCar.img}/>
        </ImageWrapper>
        <TitleWrapper>
          <Title>
            {currentCar.name}
          </Title>
          <SubTitle>
            {currentCar.sub_title}
          </SubTitle>
        </TitleWrapper>
      </InfoWrapper>
      <Details>
        <Title className='h6 display-6 mt-3'>
          Specification:
        </Title>
       <SpecWrapper className='d-flex align-items-baseline'>
       <Title className='h6 mt-3 mx-2'>
          Engine: 
        </Title> {currentCar.engine}
       </SpecWrapper>
       <SpecWrapper className='d-flex align-items-baseline'>
       <Title className='h6 mt-1 mx-2'>
       Transmission: 
        </Title> {currentCar.transmission}
       </SpecWrapper>
       <SpecWrapper className='d-flex align-items-baseline'>
       <Title className='h6 mt-1 mx-2'>
       Fuel Type: 
        </Title> {currentCar.fuel_type}
       </SpecWrapper>
      </Details>
       </> :<>
       <h1>All Cars deleteded</h1>
       <button className='btn btn-success' onClick={()=>window.location.reload()}>Retrieve all cars</button>
       </> }
    </Container>
    </>
    
  )
}

export default CarInfo
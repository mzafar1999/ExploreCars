import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const Container = styled.div`
    border: 2px solid #79fdf7;
    border-radius: 15px;
`
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`
const ImageWrapper = styled.div`
    flex: 1;
`
const Image = styled.img`
  width: 100%;
`
const TitleWrapper = styled.div`
    flex: 1;
`
const Title = styled.h1`
    
`
const SubTitle = styled.h4`
  color: gray;
`

const Details = styled.div`
  border-top: 1px solid gray;
`
const SpecWrapper = styled.div`

`
const UpdateForm = styled.div`
  
`
const Input = styled.input`
  
`

 
const CarInfo = () => {
  const currentCar = useSelector(state=>state.cars.currentCar)
  return (
    <>
    <Container className='mx-2 p-2'>
      <InfoWrapper>
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
    </Container>
    <Container className='mt-3 mx-2 p-2 d-flex flex-column justify-content-center mx-auto '>
       <Title className='h6 display-6 mt-3 mx-auto'>
          Update Car Info:
        </Title>
        <UpdateForm className='form-group d-flex flex-column justify-content-center'>
          <Input placeholder='Enter new info of Engine ' className='form-control w-75 mt-2 mx-auto'/>
          <Input placeholder='Enter new info of Transmission' className='form-control w-75 mt-2 mx-auto'/>
          <Input placeholder='Enter new info of Fuel Type' className='form-control w-75 mt-2 mx-auto'/>
          <button className='btn btn-primary w-25 mx-auto mt-3'>Update</button>
        </UpdateForm>
    </Container>
    </>
  )
}

export default CarInfo
import React from 'react'
import styled from 'styled-components';
import { Container,Title } from "./CarInfo";
const UpdateFormDiv = styled.div`
  
`
const Input = styled.input`
  
`
const UpdateForm = () => {
  return (
    <Container className='container mt-3 mx-2 p-2 d-flex flex-column justify-content-center mx-auto '>
    <Title className='h6 display-6 mt-3 mx-auto'>
       Update Car Info:
     </Title>
     <UpdateFormDiv className='form-group d-flex flex-column justify-content-center'>
       <Input placeholder='Enter new info of Engine ' className='form-control w-50 mt-2 mx-auto'/>
       <Input placeholder='Enter new info of Transmission' className='form-control w-50 mt-2 mx-auto'/>
       <Input placeholder='Enter new info of Fuel Type' className='form-control w-50 mt-2 mx-auto'/>
       <button className='btn btn-primary w-25 mx-auto mt-3'>Update</button>
     </UpdateFormDiv>
    </Container>
  )
}

export default UpdateForm

import React from 'react'
import styled from 'styled-components'
import CarInfo from './HomeComponents/CarInfo';
import CarList from './HomeComponents/CarList';
import CarPhotos from './HomeComponents/CarPhotos';

const Container = styled.div`
  
`
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 2;
`;
const Right = styled.div`
    flex: 1;
`;
const Home = () => {
  return (
    <Container className='d-flex mt-3'>
      <Left>
        <CarList/>
      </Left>
      <Center>
        <CarInfo/>
      </Center>
      <Right>
        <CarPhotos/>
      </Right>
    </Container>
  )
}

export default Home

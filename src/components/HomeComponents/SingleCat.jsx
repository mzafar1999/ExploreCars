import React from 'react'
import styled from 'styled-components'
import '../../App.css'
const Container =styled.div`
    position: relative;
  text-align: center;
  color: white;
`
const ImageContianer = styled.div`
    background-color: gray;
    height: 6em;
    width: 21em;
    border-radius: 24px;
    object-fit: contain;
    @media (max-width:1240px) {
      height: 6em;
      width: 17em;
      border-radius: 12px;

	}
  @media (max-width:940px) {
		height: 5em;
      width: 13em;
	}
`
const Image = styled.img`
  object-fit: cover;
  border-radius: 24px;
  height:100%;
  width:100%;
`
const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: white;
  background-color: rgba(0, 176, 245, 0.096);
  width: 100%;
  height: 100%;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  &:hover{
    background-color: rgba(0, 176, 245, 0.219);
    cursor: pointer;

  }
`
const Title = styled.h3`
  font-size: 2.8rem;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  font-weight: 600;
`
const SingleCat = ({id,cat,image}) => {
  return (
    <Container className='my-2'>
        <ImageContianer>
            <Image src={image}/>
        </ImageContianer>
        <TitleWrapper>
        <Title>{cat}</Title>
        </TitleWrapper>
    </Container>
  )
}

export default SingleCat
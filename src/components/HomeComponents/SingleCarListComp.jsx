import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #bfe0d3;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    cursor: pointer;
    padding: 5px;

    &:hover{
        background-color: #a4edf7;
    }
`
const ImageWrapper = styled.div`
    width: 70px;
    height: 75px;
    border-radius: 50%;
    border: 1px solid #5acbda;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    margin-right: 5px;
    flex: 1;

`
const Image = styled.img`
    width: 80%;
    border-radius: 50%;
    object-fit: cover;

`
const TitleWrapper = styled.div`
flex:3
`
const Title = styled.h5``

const SingleCarListComp = ({image,title}) => {
  return (
    <Wrapper>
        <ImageWrapper>
            <Image src={image}>
            </Image>
        </ImageWrapper>
        <TitleWrapper>
            <Title>
                {title}
            </Title>
        </TitleWrapper>
    </Wrapper>
  )
}

export default SingleCarListComp
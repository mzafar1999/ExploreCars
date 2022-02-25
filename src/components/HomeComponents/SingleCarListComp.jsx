import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #acacac;
    margin: 5px;
    padding: 5px;
`
const ImageWrapper = styled.div`
    width: 70px;
    height: 75px;
    border-radius: 50%;
    border: 1px solid #da5a5a;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    margin-right: 5px;
    flex: 1;

`
const Image = styled.img`
    width: 100%;
    border-radius: 50%;
    object-fit: cover;

`
const TitleWrapper = styled.div`
flex:2
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
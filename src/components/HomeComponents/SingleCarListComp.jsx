import React from 'react';
import styled from 'styled-components';
import '../../App.css'

const Container= styled.div`
	border: 1px solid #bfe0d3;
	border-radius: 10px;
	padding: 5px;
	margin: 5px 0;
	background-color: #f7f4ee;
`
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #bfe0d3;
	background-color: white;
	border-radius: 10px;
	margin-bottom: 10px;
	margin-top: 10px;
	cursor: pointer;
	padding: 5px;

	&:hover {
		background-color: #c2c2c2;
	}
	@media (max-width:1240px) {
		flex-direction: column;
		height: 120px;
		text-align: center;
	}
	@media (max-width:940px) {
		flex-direction: column;
		height: 150px;
		text-align: center;
	}
`;
const ImageWrapper = styled.div`
	width: 4em;
	height: 4em;
	border-radius: 50%;
	border: 1px solid #5acbda;
	display: flex;
	align-items: center;
	justify-content: center;
	object-fit: cover;
	margin-right: 5px;
	flex: 1;
	@media (max-width:1240px) {
		flex:1;
	}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: contain;
`;
const TitleWrapper = styled.div`flex: 3;
@media (max-width:1240px) {
		flex:1;
	}
`;
const Title = styled.h5``;


const SingleCarListComp = ({ image, title, selectCar,carId,deleteCar }) => {
	
	return (<Container>
		<Wrapper onClick={()=>selectCar(carId)}>
			<ImageWrapper>
				<Image src={image} />
			</ImageWrapper>
			<TitleWrapper>
					<Title>{title}</Title>
			</TitleWrapper>
		</Wrapper>
		<button className='btn btn-danger  my-1' onClick={()=> deleteCar(carId)}>Delete</button>
		</Container>
	);
};

export default SingleCarListComp;

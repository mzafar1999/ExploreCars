import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Navbar = styled.div`

`;
const Left = styled.div`
	height: 60px;
	width: 60px;
`;
const Center = styled.div`
	position: relative;
	left: -60px;
`;
const Right = styled.div`
    
`;
const Image = styled.img`
	width: 100%;
	margin-left: 40px;
`;
const Search = styled.input``;
const Button = styled.button``;
const Nav = () => {
	return (
		<Wrapper>
			<Navbar className="d-flex justify-content-between mt-2 align-items-center">
				<Left className='d-flex justify-content-center align-items-center'>
				</Left>
				<Center className='d-flex justify-content-center align-items-center'>
				<Image className='w-75' src='/images/logo.png'></Image>
					{/* <Search placeholder="Search" className='form-control' />
					<Button className='btn btn-primary  mx-2'>Search</Button> */}
				</Center>
				<Right className='d-flex align-items-end'>
        
				</Right>
			</Navbar>
		</Wrapper>
	);
};

export default Nav;

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Navbar = styled.div`

`;
const Left = styled.div`

`;
const Center = styled.div`

`;
const Right = styled.div`
    
`;
const Image = styled.img`
`;
const Logo = styled.h3``;
const Search = styled.input``;
const Button = styled.button``;
const Nav = () => {
	return (
		<Wrapper>
			<Navbar className="d-flex justify-content-between mt-2">
				<Left className='d-flex justify-content-center align-items-center'>
					<Logo>My Web App</Logo>
				</Left>
				<Center className='d-flex justify-content-center align-items-center'>
					<Search placeholder="Search" className='form-control' />
					<Button className='btn btn-primary  mx-2'>Search</Button>
				</Center>
				<Right className='d-flex align-items-end'>
        <Button className='btn btn-primary'>Sign in</Button>
        <Button className='btn btn-primary  mx-2'>Sign up</Button>

				</Right>
			</Navbar>
		</Wrapper>
	);
};

export default Nav;

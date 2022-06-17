import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { Header } from './Header/Header';

export const Layout = () => {
	return (
		<>
			<Header />

			<Container maxW="container.xl" centerContent>
				<Outlet />
			</Container>
		</>
	);
};

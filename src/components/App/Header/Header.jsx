import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
	const bg = useColorModeValue('gray.300', 'gray.600');
	const color = useColorModeValue('gray.600', 'gray.300');

	return (
		<Flex as="header" w="full" p="4" bg={bg}>
			<Heading as="h1" size="2xl" flexGrow="1" textAlign="center" color={color}>
				The Ultimate Form Challenge
			</Heading>
		</Flex>
	);
};

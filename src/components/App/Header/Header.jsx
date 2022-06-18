import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../../utils/ColorModeSwitcher';

export const Header = () => {
	const flexBoxStyleBg = useColorModeValue('gray.300', 'gray.600');
	const FlexBoxShadow = useColorModeValue('md', 'dark-lg');
	const headingStyleColor = useColorModeValue('gray.600', 'gray.300');

	const flexBoxStyle = {
		as: 'header',
		align: 'center',
		w: 'full',
		p: '4',
		bg: `${flexBoxStyleBg}`,
		shadow: `${FlexBoxShadow}`,
	};
	const headingStyle = {
		as: 'h1',
		size: '2xl',
		flexGrow: '1',
		textAlign: 'center',
		color: `${headingStyleColor}`,
		fontFamily: 'mono',
	};

	return (
		<Flex {...flexBoxStyle}>
			<Heading {...headingStyle}>The Ultimate Form Challenge</Heading>
			<ColorModeSwitcher />
		</Flex>
	);
};

import { Button, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ButtonForm = ({ text, rightIcon }) => {
	const buttonColor = useColorModeValue('cyan.500', 'blue.500');
	const buttonShadow = useColorModeValue('lg', 'dark-lg');

	return (
		<Button
			type="submit"
			size="lg"
			variant="solid"
			w="full"
			color={buttonColor}
			shadow={buttonShadow}
			rightIcon={rightIcon}
			_active={{
				transform: 'scale(0.95)',
			}}
		>
			{text}
		</Button>
	);
};
ButtonForm.propTypes = {
	text: PropTypes.string.isRequired,
	rightIcon: PropTypes.element,
};

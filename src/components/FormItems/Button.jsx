import { Button, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ButtonForm = ({ text, rightIcon, isDisabled }) => {
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
			isDisabled={isDisabled}
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
	rightIcon: PropTypes.element,
	isDisabled: PropTypes.bool,
	text: PropTypes.string.isRequired,
};

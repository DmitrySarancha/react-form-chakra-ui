import {
	Box,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const InputFormControl = ({ name, register, errors, helper = '' }) => {
	const inputFocusBorderColor = useColorModeValue('purple.300', 'pink.400');
	const inputStyleShadow = useColorModeValue('md', 'dark-lg');
	const boxStyleBorderColor = useColorModeValue('cyan.300', 'blue.700');
	const boxStyleShadow = useColorModeValue('lg', 'dark-lg');

	const boxStyle = {
		w: 'lg',
		border: '1px',
		borderRadius: 'lg',
		boxShadow: `${boxStyleShadow}`,
		borderColor: `${boxStyleBorderColor}`,
	};

	const formControlStyle = {
		w: 'md',
		p: '4',
		m: '0 auto',
	};

	const inputStyle = {
		size: 'lg',
		variant: 'outline',
		focusBorderColor: `${inputFocusBorderColor}`,
		errorBorderColor: 'red.300',
		shadow: `${inputStyleShadow}`,
	};

	return (
		<Box {...boxStyle}>
			<FormControl {...formControlStyle} isRequired isInvalid={errors[name]}>
				<FormLabel htmlFor={name}>{name}</FormLabel>
				<Input
					{...inputStyle}
					id={name}
					placeholder={name}
					{...register(`${name}`)}
				/>
				{errors[name] ? (
					<FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
				) : (
					<FormHelperText>{helper}</FormHelperText>
				)}
			</FormControl>
		</Box>
	);
};

InputFormControl.propTypes = {
	register: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	helper: PropTypes.string.isRequired,
};
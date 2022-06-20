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

export const InputFormControl = ({
	name,
	register,
	errors,
	helper = '',
	onChange = undefined,
	type,
}) => {
	const inputFocusBorderColor = useColorModeValue('purple.300', 'yellow.600');
	const inputStyleShadow = useColorModeValue('md', 'dark-lg');
	const boxStyleBorderColor = useColorModeValue('cyan.300', 'blue.700');
	const boxStyleShadow = useColorModeValue('lg', 'dark-lg');

	const boxStyle = {
		w: 'full',
		borderRadius: 'lg',
		boxShadow: `${boxStyleShadow}`,
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
			<FormControl p="4" isInvalid={errors[name]}>
				<FormLabel htmlFor={name}>{name}</FormLabel>
				<Input
					type={type}
					{...inputStyle}
					id={name}
					placeholder={name}
					{...register(`${name}`, {
						onChange: onChange,
					})}
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
	onChange: PropTypes.func,
	register: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	helper: PropTypes.string.isRequired,
	type: PropTypes.string,
};

import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
} from '@chakra-ui/react';

export const InputFormControl = ({ name, register, errors, helper = '' }) => {
	return (
		<FormControl w="md" p="4" isRequired isInvalid={errors[name]}>
			<FormLabel htmlFor={name}>email</FormLabel>
			<Input id={name} placeholder={name} {...register(`${name}`)} />
			{errors[name] ? (
				<FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
			) : (
				<FormHelperText>{helper}</FormHelperText>
			)}
		</FormControl>
	);
};

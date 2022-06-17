import { Button, useColorModeValue } from '@chakra-ui/react';
import { FaRegHandLizard } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const scheme = yup.object().shape({
	email: yup
		.string()
		.email('Напиши ёё правильно и получи 🍪')
		.required('Введите почту ✉'),
});

export const Step1 = () => {
	const buttonColor = useColorModeValue('cyan.500', 'blue.400');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(scheme),
	});

	const onSubmit = data => console.log(data);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="text" name="email" {...register('email')} />
				{errors.email && errors?.email?.message}
				<Button
					variant={'solid'}
					size={'md'}
					type="submit"
					color={buttonColor}
					rightIcon={<FaRegHandLizard />}
				>
					Next!
				</Button>
			</form>
		</>
	);
};

import { Button, useColorModeValue } from '@chakra-ui/react';
import { FaRegHandLizard } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export const Step1 = () => {
	const buttonColor = useColorModeValue('cyan.500', 'blue.400');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	});

	const onSubmit = data => console.log(data);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					name="email"
					{...register('email', {
						required: 'Заполните пожалуйта',
						minLength: {
							value: 3,
							message: 'минимальное значение 3',
						},
					})}
				/>
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

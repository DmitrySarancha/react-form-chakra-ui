import { Button, Heading, useColorModeValue } from '@chakra-ui/react';
import { FaRegHandLizard } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputFormControl } from '../../FormItems/Input';

const scheme = yup.object().shape({
	Email: yup
		.string()
		.email('Напиши ёё правильно и получи 🍪')
		.required('Введите почту ✉'),
});

export const Step1 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(scheme),
	});

	const buttonColor = useColorModeValue('cyan.500', 'blue.500');

	const onSubmit = data => console.log(data);

	return (
		<>
			<Heading as="h1" size="xl" m="2rem 0">
				🐁 Step 1
			</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputFormControl
					name="Email"
					register={register}
					errors={errors}
					helper="💬"
				/>

				<Button
					variant="solid"
					size="md"
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

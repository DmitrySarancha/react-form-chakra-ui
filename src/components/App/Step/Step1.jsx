import { Heading, useColorModeValue } from '@chakra-ui/react';
import { FaRegHandLizard } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputFormControl } from '../../FormItems/Input';
import { ButtonForm } from '../../FormItems/Button';
import { useNavigate } from 'react-router-dom';

const scheme = yup.object().shape({
	'First Name': yup
		.string()
		.matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр!')
		.required('Введите имя!'),
	'Last Name': yup
		.string()
		.matches(/^([^0-9]*)$/, 'Фамилия не должна содержать цифр!')
		.required('Введите фамилию!'),
});

export const Step1 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(scheme),
	});
	const navigate = useNavigate();

	const buttonColor = useColorModeValue('cyan.500', 'blue.500');

	const onSubmit = data => {
		navigate('/step2');
	};

	return (
		<>
			<Heading as="h1" size="xl" mt="2rem">
				🐁 Step 1
			</Heading>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputFormControl
					name="First Name"
					register={register}
					errors={errors}
					helper="💬"
				/>
				<InputFormControl
					name="Last Name"
					register={register}
					errors={errors}
					helper="💬"
				/>

				<ButtonForm
					isDisabled={!isValid}
					text="Next"
					rightIcon={<FaRegHandLizard />}
				/>
			</form>
		</>
	);
};

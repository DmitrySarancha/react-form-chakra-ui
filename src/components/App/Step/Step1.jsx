import { FaRegHandLizard } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputFormControl } from '../../FormItems/Input';
import { ButtonForm } from '../../FormItems/Button';
import { useNavigate } from 'react-router-dom';
import { Heading1 } from './Heading';

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

	const onSubmit = data => {
		navigate('/step2');
	};

	return (
		<>
			<Heading1 text="🐁 Step 1" />

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
					texts="Next"
					rightIcon={<FaRegHandLizard />}
				/>
			</form>
		</>
	);
};

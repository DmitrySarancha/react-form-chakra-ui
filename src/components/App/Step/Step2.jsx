import * as yup from 'yup';
import { Heading1 } from './Heading';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputFormControl } from '../../FormItems/Input';
import {
	Checkbox,
	ScaleFade,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { ButtonForm } from '../../FormItems/Button';
import { FaWaze } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const scheme = yup.object().shape({
	Email: yup
		.string()
		.email('Напиши ёё правильно и получи 🍪')
		.required('Введите почту ✉'),
	Telephone: yup.number().integer('Номер сосоит только из чисел 📵'),
});

export const Step2 = () => {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(scheme),
	});

	const navigate = useNavigate();

	const onSubmit = data => {
		navigate('/step3');
	};

	// checkbox
	const chekBoxColorScheme = useColorModeValue('purple', 'yellow');
	const cheked = watch('check');

	// Telephone
	const normalizeNumberPhone = value => {
		const phoneNumber = parsePhoneNumberFromString(value, 'RU');
		if (!phoneNumber) return value;
		return phoneNumber.formatInternational();
	};
	const onChange = e => {
		e.target.value = normalizeNumberPhone(e.target.value);
	};

	return (
		<>
			<Heading1 text="🦄 Step 2" />
			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack spacing="8" mt="8" w="md">
					<InputFormControl
						type="email"
						helper="📩"
						name="Email"
						errors={errors}
						register={register}
					/>

					<Checkbox
						size="lg"
						m={'2rem 0'}
						colorScheme={chekBoxColorScheme}
						{...register('check')}
					>
						Добавить номер телефона
					</Checkbox>

					<ScaleFade
						in={cheked}
						initialScale={0.8}
						reverse={true}
						unmountOnExit={true}
					>
						<InputFormControl
							type="tel"
							name="Telephone"
							helper="📱"
							errors={errors}
							register={register}
							onChange={onChange}
						/>
					</ScaleFade>

					<ButtonForm texts="Go!" rightIcon={<FaWaze />} />
				</VStack>
			</form>
		</>
	);
};

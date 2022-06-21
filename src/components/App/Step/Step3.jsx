import { VStack } from '@chakra-ui/react';
import { ButtonForm } from 'components/FormItems/Button';
import { InputFile } from 'components/FormItems/InputFile';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useData } from 'utils/useData';
import { Heading1 } from './Heading';

export const Step3 = () => {
	const [_, setStore] = useData();

	const { handleSubmit, control } = useForm({
		mode: 'onBlur',
	});
	const navigate = useNavigate();

	const onSubmit = data => {
		setStore(data);
		navigate('/result');
	};

	return (
		<>
			<Heading1 text='Step 3 👻' />
			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack>
					<InputFile control={control} name="file" />
					<ButtonForm texts="Go next! 🦔" />
				</VStack>
			</form>
		</>
	);
};

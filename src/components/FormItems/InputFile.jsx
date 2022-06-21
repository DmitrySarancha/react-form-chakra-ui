import {
	Box,
	Input,
	List,
	ListIcon,
	ListItem,
	Text,
	VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import { MdCheckCircle, MdErrorOutline } from 'react-icons/md';
import { FiFilePlus } from 'react-icons/fi';

export const InputFile = ({ name, control }) => {
	const MAX_SIZE = 15 * (1024 * 1024); // 15mb

	const rootBoxStyle = {
		border: '3px',
		borderStyle: 'dashed',
		borderColor: 'red.300',
		overflow: 'hidden',
		mt: '2rem',
		w: 'lg',
		h: '10rem',
	};

	const dragStyle = {
		position: 'relative',
		w: '80%',
		h: '70%',
		border: '2px',
		borderStyle: 'dashed',
		borderColor: 'gray.300',
		cursor: 'pointer',
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, onBlur, name } }) => (
				<>
					<Dropzone onDrop={onChange} maxSize={MAX_SIZE}>
						{({
							getInputProps,
							getRootProps,
							fileRejections,
							acceptedFiles,
							isDragActive,
						}) => {
							const files = acceptedFiles.map(file => (
								<>
									<ListItem key={file.name}>
										<ListIcon as={MdCheckCircle} color="green.500" />
										Имя файла - {file.name}
										<hr></hr>
										Размер файла: {Math.round(file.size / 1024 / 1000)} мб
									</ListItem>
								</>
							));

							const filesError = fileRejections.map(({ file, errors }) =>
								errors.map(error => (
									<>
										{error.code === 'file-too-large' && (
											<ListItem key={file.name}>
												<ListIcon as={MdErrorOutline} color="red.500" />
												Максимальный размер файла 15 мб
												<hr />
											</ListItem>
										)}
									</>
								))
							);
							const anim = {
								scale: 1.03,
								borderColor: '#c43bb7',
								transition: { duration: 0.1 },
							};

							return (
								<>
									<VStack {...rootBoxStyle} justify="center">
										<VStack
											{...getRootProps()}
											{...dragStyle}
											justify="center"
											as={motion.div}
											animate={isDragActive ? { ...anim } : undefined}
											whileHover={{
												scale: 1.05,
												borderColor: '#34fe09',
												transition: { duration: 0.1 },
											}}
											whileTap={{ scale: 0.95 }}
										>
											<Input {...getInputProps()} name={name} onBlur={onBlur} />
											<FiFilePlus size={40} strokeWidth="0.5" />
											<Text>
												Drag 'n' drop some files here, or click to select files
											</Text>
										</VStack>
									</VStack>

									<Box m="1rem 0">
										<List spacing={2}>{filesError && filesError}</List>
										<List spacing={2}>{files && files}</List>
									</Box>
								</>
							);
						}}
					</Dropzone>
				</>
			)}
		/>
	);
};

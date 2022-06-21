import { Button, Heading, useBoolean, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableContainer,
} from '@chakra-ui/react';
import { useData } from 'utils/useData';
export const Result = () => {
	const [store] = useData();
	const navigate = useNavigate();
	const { colorMode } = useColorMode();

	const data = Object.entries(store).filter(item => item[0] !== 'file');
	const { file } = store;

	const next = () => {
		navigate('/');
	};

	return (
		<>
			<Heading as="h2" mt="5">
				📋 Form Value
			</Heading>
			<TableContainer mt="8" w="max-content">
				<Table
					variant="simple"
					colorScheme={colorMode === 'light' ? 'red' : 'yellow'}
				>
					<Thead>
						<Tr>
							<Th>Field</Th>
							<Th>Value</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data.map(i => {
							return typeof i[1] === 'boolean' ? (
								<Tr>
									<Td>{i[0] || '...'}</Td>
									<Td>{i[1].toString() || '...'}</Td>
								</Tr>
							) : (
								<Tr>
									<Td>{i[0] || '...'}</Td>
									<Td>{i[1] || '...'}</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>

			<Heading as="h2" mt="5">
				📦 File Value
			</Heading>

			{file && (
				<TableContainer mt="8" w="max-content">
					<Table colorScheme={colorMode === 'light' ? 'red' : 'yellow'}>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Value</Th>
							</Tr>
						</Thead>
						<Tbody>
							{file.map(i => (
								<Tr>
									<Td>{i.name}</Td>
									<Td>{i.size}</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			)}
			<Button m="2rem 0" colorScheme="teal" size="md" onClick={next}>
				Go restart
			</Button>
		</>
	);
};

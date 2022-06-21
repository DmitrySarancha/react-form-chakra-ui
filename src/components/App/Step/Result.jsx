import { Button, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react';
import { useData } from 'utils/useData';
export const Result = () => {
	const [store] = useData();
	const navigate = useNavigate();
	const { colorMode } = useColorMode();

	const data = Object.entries(store).filter(item => item[0] !== 'file');
	console.log(data);

	return (
		<>
			<TableContainer mt={8}>
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
									<Td>{i[0]}</Td>
									<Td>{i[1].toString()}</Td>
								</Tr>
							) : (
								<Tr>
									<Td>{i[0]}</Td>
									<Td>{i[1]}</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>

			<Button mt={8} colorScheme="teal" size="md" onClick={() => navigate('/')}>
				Go restart
			</Button>
		</>
	);
};

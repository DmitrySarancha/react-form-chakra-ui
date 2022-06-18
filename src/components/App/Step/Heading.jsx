import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

export const Heading1 = ({ text }) => {
	return (
		<Heading as="h1" size="xl" mt="2rem">
			{text}
		</Heading>
	);
};

Heading.propTypes = {
	text: PropTypes.string.isRequired,
};

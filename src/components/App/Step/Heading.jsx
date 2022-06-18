import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

export const Heading1 = ({ text }) => {
	return (
		<Heading as="h1" size="xl" mt="2rem" fontFamily="heading1">
			{text}
		</Heading>
	);
};

Heading.propTypes = {
	text: PropTypes.string,
};

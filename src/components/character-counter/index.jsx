import React from 'react';
import styled from 'styled-components';

const Counter = styled.span`
	font-size: 12px;
`;

const CharacterCounter = ({ value, maxLength }) => {
	const remainingChars = maxLength - value.length;
	const isOverLimit = remainingChars < 0;

	return (
		<Counter style={{ color: isOverLimit ? 'red' : 'inherit' }}>
			{remainingChars} character{remainingChars !== 1 ? 's' : ''} remaining
		</Counter>
	);
};

export default CharacterCounter;

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
	margin-top: 1rem;
`;

export const Container = styled.label`
	width: 100%;
	max-width: 180px;
	cursor: pointer;

	& .error {
		border-color: rgba(255, 0, 0, 1);
	}
`;
export const Box = styled.div`
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 0.5rem 0.75rem;
	height: 100%;
`;

export const Input = styled.input`
	display: none;
	&:checked + ${Box} {
		border: 2px solid #1bd97b;
		background: rgba(27, 217, 123, 0.1);
	}
`;

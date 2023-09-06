import { styled } from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	margin-bottom: 16px;
	border: 1px solid #ccc;
	transition: border-color 0.3s;

	&.error {
		border-color: red;
	}
	&.success {
		border-color: green;
	}
`;

export const Label = styled.label`
	font-size: 14px;
	position: absolute;
	top: 10px;
	left: 10px;
	transition: top 0.3s, font-size 0.3s;
	pointer-events: none;
	color: #ccc;

	&.active {
		top: -10px;
		color: black;
	}
`;

export const InputStyles = styled.input`
	padding: 10px;
	border: 1px solid transparent;
	border-radius: 4px;
	font-size: 16px;
	outline: none;
	transition: border-color 0.3s;
	width: 100%;

	&.success {
		border-color: red; /* Border color for error input */
	}
	&.error {
		border-color: red; /* Border color for error input */
	}
`;

export const ErrorIcon = styled.span`
	position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
	color: red;
`;

export const SuccessIcon = styled(ErrorIcon)`
	color: #4caf50;
`;

import { styled } from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	margin-bottom: 16px;
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
	padding-right: 1.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	outline: none;
	transition: border-color 0.3s;
	width: 100%;

	&.success {
		border-color: rgba(0, 128, 0, 0.3);
	}
	&.error {
		border-color: rgba(255, 0, 0, 0.3);
	}
`;

export const TextAreaStyles = styled.textarea`
	border-color: #ccc;
	padding: 10px;
	padding-right: 1.5rem;
	font-size: 16px;
	border-radius: 4px;
	outline: none;
	width: 100%;
	height: 110px;
	resize: none;
	overflow-y: hidden;
	&.success {
		border-color: rgba(0, 128, 0, 0.3);
	}
	&.error {
		border-color: rgba(255, 0, 0, 0.3);
	}
`;

export const ErrorIcon = styled.span`
	position: absolute;
	top: 1.25rem;
	right: 10px;
	transform: translateY(-50%);
	color: red;
`;

export const SuccessIcon = styled(ErrorIcon)`
	color: #4caf50;
`;

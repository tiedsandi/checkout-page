import { styled } from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 10rem;
`;
export const Box = styled.div`
	margin-top: 0.5rem;
	p {
		color: #aaa;
	}
`;
export const Input = styled.input`
	width: max-content;
	padding: 0.2rem 0.8rem;
	font-size: 14px;
	color: white;
	background-color: orange;
	margin-top: 1rem;
	cursor: pointer;

	border: none;
	box-shadow: 1px 1px 18px 2px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 1px 1px 18px 2px rgba (0, 0, 0, 0.1);
	-moz-box-shadow: 1px 1px 18px 2px rgba (0, 0, 0, 0.1);
`;

import { styled } from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	padding-left: 30px;
	cursor: pointer;
`;

export const CheckBox = styled.div`
	position: absolute;
	display: inline-block;
	width: 20px;
	height: 20px;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	margin-right: 8px;
	font-size: 15px;
	color: green;
	border: 2px solid ${({ checked }) => (checked ? 'Green' : '#333')};
	transform: scale(${({ checked }) => (checked ? 1 : 0.3)});
	transform-origin: center;
	transition: transform 0.3s ease-in-out;
`;

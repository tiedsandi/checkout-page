import { styled } from 'styled-components';

export const Wrapper = styled.div`
	// background-color: red;
	border-left: 1px solid #ccc;
	padding-left: 1rem;
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Header = styled.div``;
export const Footer = styled.div``;

export const PurchaseItems = styled.p`
	font-size: 16px;
	color: #aaa;
`;
export const TextItem = styled.p`
	font-size: 16px;
	color: #black;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.3rem;
	span {
		font-weight: 700;
	}
`;
export const TextTotal = styled.h6`
	font-size: 25px;
	color: orange;
	font-weight: 700;
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

export const SubmitButton = styled.input`
	width: 100%;
	padding: 1rem 2rem;
	font-size: 18px;
	color: white;
	background-color: orange;

	border: none;
	box-shadow: 1px 1px 18px 2px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 1px 1px 18px 2px rgba (0, 0, 0, 0.1);
	-moz-box-shadow: 1px 1px 18px 2px rgba (0, 0, 0, 0.1);
`;

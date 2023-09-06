import { styled } from 'styled-components';

export const Wrapper = styled.div`
	background-color: #fff;
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
	padding: 2rem;

	box-shadow: 1px 1px 18px 2px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 1px 1px 18px 2px rgba (0, 0, 0, 0.1);
	-moz-box-shadow: 1px 1px 18px 2px rgba (0, 0, 0, 0.1);
`;

export const Breadcrumb = styled.div`
	color: #000;
	font-size: 16px;
	margin-bottom: 1rem;

	& span {
		color: orange;
	}
`;

export const Grid = styled.form`
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Heading1 = styled.h1`
	color: orange;
	font-size: 31px;
`;

export const Heading2 = styled.h2`
	color: orange;
	font-size: 25px;
`;

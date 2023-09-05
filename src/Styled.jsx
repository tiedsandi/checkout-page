import { styled } from "styled-components";

export const Wrapper = styled.div`
	background-color: #fff;
	max-width: 1440px;
	width: 100%;
	margin: 2rem auto;
	padding: 2rem;

	box-shadow: 1px 1px 18px 2px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 1px 1px 18px 2px rgba (0, 0, 0, 0.1);
	-moz-box-shadow: 1px 1px 18px 2px rgba (0, 0, 0, 0.1);
`;

export const Breadcrumb = styled.div`
	color: #000;
	font-size: 20px;

	& span {
		color: orange;
	}
`;

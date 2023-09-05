import React, { useContext } from "react";
import { Breadcrumb, Wrapper } from "./Styled";
import { CheckoutContext } from "./contexts/CheckoutContext";

function App() {
	const { pageRender } = useContext(CheckoutContext);
	console.log(pageRender);

	return (
		<Wrapper>
			<Breadcrumb>
				<span>Delivery</span> {">"} Payment {">"} Finish
			</Breadcrumb>
			<h1>Checkout</h1>
		</Wrapper>
	);
}

export default App;

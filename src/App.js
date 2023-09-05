import React, { useContext } from "react";
import { Breadcrumb, Grid, Wrapper } from "./Styled";
import { CheckoutContext } from "./contexts/CheckoutContext";
import DeliveryDetails from "./pages/delivery-details";
import Summary from "./layout/summary";

function App() {
	const { pageRender } = useContext(CheckoutContext);
	console.log(pageRender);

	return (
		<Wrapper>
			<Breadcrumb>
				<span>Delivery</span> {">"} Payment {">"} Finish
			</Breadcrumb>
			<Grid>
				{pageRender === "delivery" && <DeliveryDetails />}
				{pageRender === "payment" && <DeliveryDetails />}
				{pageRender === "finish" && <DeliveryDetails />}
				<Summary />
			</Grid>
		</Wrapper>
	);
}

export default App;

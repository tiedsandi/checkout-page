import React, { useContext } from 'react';

import DeliveryDetails from './pages/delivery-details';
import Summary from './layout/summary';

import { Breadcrumb, Grid, Wrapper } from './Styled';
import { CheckoutContext } from './contexts/CheckoutContext';

function App() {
	const { pageRender } = useContext(CheckoutContext);

	return (
		<Wrapper>
			<Breadcrumb>
				<span>Delivery</span> {'>'} Payment {'>'} Finish
			</Breadcrumb>
			<Grid>
				{pageRender === 'delivery' && <DeliveryDetails />}
				{pageRender === 'payment' && <DeliveryDetails />}
				{pageRender === 'finish' && <DeliveryDetails />}
				<Summary />
			</Grid>
		</Wrapper>
	);
}

export default App;

import React, { useContext } from 'react';

import DeliveryDetails from './pages/delivery-details';
import Summary from './layout/summary';

import { Breadcrumb, Grid, Wrapper } from './Styled';
import { CheckoutContext } from './contexts/CheckoutContext';
import { FormContext } from './contexts/FormContext';

function App() {
	const { pageRender } = useContext(CheckoutContext);
	const { handleSubmit } = useContext(FormContext);
	return (
		<Wrapper>
			<Breadcrumb>
				<span>Delivery</span> {'>'} Payment {'>'} Finish
			</Breadcrumb>
			<Grid onSubmit={handleSubmit(data => console.log(data))}>
				{pageRender === 'delivery' && <DeliveryDetails />}
				{pageRender === 'payment' && <DeliveryDetails />}
				{pageRender === 'finish' && <DeliveryDetails />}
				<Summary />
			</Grid>
		</Wrapper>
	);
}

export default App;

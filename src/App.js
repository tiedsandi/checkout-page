import React, { useContext, useEffect } from 'react';

import DeliveryDetails from './pages/delivery-details';
import PaymentDetails from './pages/payment-details';
import FinishDetail from './pages/finish-details';
import Summary from './layout/summary';

import { Breadcrumb, Grid, Wrapper } from './Styled';
import { CheckoutContext } from './contexts/CheckoutContext';
import { FormContext } from './contexts/FormContext';

function App() {
	const { pageRender, setPageRender } = useContext(CheckoutContext);
	const { handleSubmit, setData, watchAllFields } = useContext(FormContext);

	const OnSubmit = data => {
		console.log(data);
		setData(data);
		if (pageRender === 'delivery') {
			setPageRender('payment');
		} else if (pageRender === 'payment') {
			setPageRender('finish');
		} else setPageRender('delivery');
	};

	return (
		<Wrapper>
			<Breadcrumb>
				<span>Delivery</span> {'>'} Payment {'>'} Finish
			</Breadcrumb>
			<Grid onSubmit={handleSubmit(OnSubmit)}>
				{pageRender === 'delivery' && <DeliveryDetails />}
				{pageRender === 'payment' && <PaymentDetails />}
				{pageRender === 'finish' && <FinishDetail />}
				<Summary />
			</Grid>
		</Wrapper>
	);
}

export default App;

import React, { useContext } from 'react';

import { CheckoutContext } from './contexts/CheckoutContext';
import { FormContext } from './contexts/FormContext';

import DeliveryDetails from './pages/delivery-details';
import PaymentDetails from './pages/payment-details';
import FinishDetail from './pages/finish-details';
import Summary from './layout/summary';

import { Breadcrumb, Grid, Wrapper, BreadcrumbItem } from './Styled';

function App() {
	const { pageRender, setPageRender } = useContext(CheckoutContext);
	const { handleSubmit, setDataTransaction, reset } = useContext(FormContext);

	const OnSubmit = data => {
		console.log(data);
		setDataTransaction(data);
		if (pageRender === 'delivery') {
			setPageRender('payment');
		} else if (pageRender === 'payment') {
			setPageRender('finish');
		} else {
			reset();
			setPageRender('delivery');
			setDataTransaction(null);
		}
	};

	return (
		<Wrapper>
			<Breadcrumb>
				<BreadcrumbItem className={'active'} onClick={() => pageRender !== 'delivery' && setPageRender('delivery')}>
					Delivery
				</BreadcrumbItem>
				<BreadcrumbItem
					className={pageRender !== 'delivery' ? 'active' : ''}
					onClick={() => pageRender === 'finish' && setPageRender('payment')}>
					{'>'} Payment
				</BreadcrumbItem>
				<BreadcrumbItem
					className={pageRender === 'finish' ? 'active' : ''}
					onClick={() => pageRender === 'finish' && setPageRender('finish')}>
					{'>'} Finish
				</BreadcrumbItem>
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

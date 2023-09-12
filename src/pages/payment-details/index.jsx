import React from 'react';
import { Container, Wrapper } from './styles';
import { Heading1 } from '../../Styled';
import Radio from '../../components/radio';

const ShipmentOptions = [
	{ title: 'Go-Send', price: '15,000', value: 'Go Send' },
	{ title: 'JNE', price: '9,000', value: 'JNE' },
	{ title: 'Personal Courir', price: '29,000', value: 'Personal Courir' },
];
const PaymentOptions = [
	{ title: 'e-Wallet', price: '1,500,000 left', value: 'e-Wallet' },
	{ title: 'Bank Transfer', value: 'Bank Transfer' },
	{ title: 'Virtual Account', value: 'Virtual Account' },
];

const PaymentDetails = () => {
	return (
		<Wrapper>
			<Container>
				<Heading1>Shipment</Heading1>
				<Radio name={'shipment'} options={ShipmentOptions} />
			</Container>
			<Container>
				<Heading1>Payment</Heading1>
				<Radio name={'payment'} options={PaymentOptions} />
			</Container>
		</Wrapper>
	);
};

export default PaymentDetails;

import React from 'react';
import { Container, Wrapper } from './styles';
import { Heading1 } from '../../Styled';
import Radio from '../../components/radio';

const ShipmentOptions = [
	{ title: 'Go-Send', price: '15,000', value: 'goSend' },
	{ title: 'JNE', price: '9,000', value: 'jne' },
	{ title: 'Personal Courir', price: '29,000', value: 'personalCourir' },
];
const PaymentOptions = [
	{ title: 'e-Wallet', price: '1,500,000 left', value: 'eWallet' },
	{ title: 'Bank Transfer', value: 'bankTransfer' },
	{ title: 'Virtual Account', value: 'virtualAccount' },
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

import React, { useContext } from 'react';
import { Heading2 } from '../../Styled';
import { FormContext } from '../../contexts/FormContext';
import { Box, Footer, Header, PurchaseItems, SubmitButton, TextItem, TextTotal, Wrapper } from './styles';
import { CheckoutContext } from '../../contexts/CheckoutContext';

const Summary = () => {
	const { isDropshipper } = useContext(FormContext);
	const { pageRender } = useContext(CheckoutContext);
	const payment = 'e-wallet';
	const shipment = 'Go-send';

	return (
		<Wrapper>
			<Header>
				<Heading2>Summary</Heading2>
				<PurchaseItems>10 items purchased</PurchaseItems>
				{pageRender !== 'delivery' && (
					<Box>
						<h4>Delivery estimation</h4>
						<h5>today by {shipment}</h5>
					</Box>
				)}
				{pageRender === 'finish' && (
					<Box>
						<h4>Payment Method</h4>
						<h5>{payment}</h5>
					</Box>
				)}
			</Header>
			<Footer>
				<TextItem>
					Cost of Goods <span>500,000</span>
				</TextItem>
				{isDropshipper && (
					<TextItem>
						Dropshipping Fee <span>5,900</span>
					</TextItem>
				)}
				{pageRender !== 'delivery' && (
					<TextItem>
						<div>
							<b>{shipment}</b> shipment
						</div>
						<span>15,000</span>
					</TextItem>
				)}

				<TextTotal>
					Total<span>505,900</span>
				</TextTotal>

				{pageRender === 'delivery' && <SubmitButton type="submit" value={'Continue to Payment'} />}
				{pageRender === 'payment' && <SubmitButton type="submit" value={'Pay with ' + payment} />}
			</Footer>
		</Wrapper>
	);
};

export default Summary;

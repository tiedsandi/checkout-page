import React, { useContext } from 'react';
import { Heading1 } from '../../Styled';
import { FormContext } from '../../contexts/FormContext';
import { Box, Input, Wrapper } from './styles';

const FinishDetail = () => {
	const { dataTransaction } = useContext(FormContext);
	const Estimate =
		dataTransaction.shipment === 'jne' ? '2 days' : dataTransaction.shipment === 'personalCourir' ? '1 day' : 'today';
	return (
		<Wrapper>
			<Heading1>FinishDetail</Heading1>
			<Box>
				<b>order ID: {dataTransaction.id}</b>
				<p>
					Your order will be delivered <u>{Estimate}</u> with <b>{dataTransaction.shipment}</b>
				</p>
			</Box>
			<Input type="submit" value={'Finish Transaction'} />
		</Wrapper>
	);
};

export default FinishDetail;

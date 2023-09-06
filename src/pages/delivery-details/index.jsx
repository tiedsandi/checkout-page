import React from 'react';
import { Heading1 } from '../../Styled';
import { FormDetails, FormDropshipper, Heading, Wrapper, WrapperForm } from './styles';
import Input from '../../components/Input';

const DeliveryDetails = () => {
	// const deliveryAddressValue = watch('deliveryAddress', '');
	const regPhone = /^[0][8][0-9,\-\+\(\)]{6,20}$/;
	const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	return (
		<Wrapper>
			<Heading>
				<Heading1>DeliveryDetails</Heading1>
				<div className="checkout">dropshipper?</div>
			</Heading>
			<WrapperForm>
				<FormDetails>
					<Input label={'Email'} pattern={regEmail} required={true} />
					<Input label={'Phone Number'} pattern={regPhone} required={true} />
					<Input label={'Delivery Address'} required={true} />
				</FormDetails>
				<FormDropshipper>
					<Input label={'Dropshiper Name'} required={true} />
					<Input label={'Dropshiper Phone Number'} pattern={regPhone} required={true} />
				</FormDropshipper>
			</WrapperForm>
		</Wrapper>
	);
};

export default DeliveryDetails;

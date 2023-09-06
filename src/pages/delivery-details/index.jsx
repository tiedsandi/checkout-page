import React from 'react';
import { Heading1 } from '../../Styled';
import { FormDetails, FormDropshipper, Heading, Wrapper, WrapperForm } from './styles';
import Input from '../../components/Input';

const DeliveryDetails = () => {
	// const deliveryAddressValue = watch('deliveryAddress', '');
	return (
		<Wrapper>
			<Heading>
				<Heading1>DeliveryDetails</Heading1>
				<div className="checkout">dropshipper?</div>
			</Heading>
			<WrapperForm>
				<FormDetails>
					<Input
						name={'Email'}
						label={'Email'}
						pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
						required={true}
					/>
					<Input label={'Phone Number'} name={'phoneNumber'} pattern={/^[0][8][0-9,\-\+\(\)]{6,20}$/} required={true} />
					<Input label={'Delivery Address'} name={'deliveryAddress'} required={true} />
				</FormDetails>
				<FormDropshipper>
					<Input
						label={'Dropshiper Name'}
						name={'dropshiperName'}
						pattern={/^[0][8][0-9,\-\+\(\)]{6,20}$/}
						required={true}
					/>
					<Input
						label={'Dropshiper Phone Number'}
						name={'dropshiperPhoneNumber'}
						pattern={/^[0][8][0-9,\-\+\(\)]{6,20}$/}
						required={true}
					/>
				</FormDropshipper>
			</WrapperForm>
		</Wrapper>
	);
};

export default DeliveryDetails;

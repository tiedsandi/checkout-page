import React from 'react';
import { Heading1 } from '../../Styled';
import { FormDetails, FormDropshipper, FormWrapper, Heading, Wrapper } from './styles';
import { useForm } from 'react-hook-form';
import Input from '../../components/Inputs';

const DeliveryDetails = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' });

	return (
		<Wrapper>
			<Heading>
				<Heading1>DeliveryDetails</Heading1>
				<div className="checkout">dropshipper?</div>
			</Heading>
			<FormWrapper>
				<FormDetails>
					<Input label={'Email'} register={register} required />
					<Input label={'Phone Number'} register={register} required />
					<Input label={'Delivery Address'} register={register} required />
				</FormDetails>
				<FormDropshipper>
					<Input label={'Dropshiper Name'} register={register} required />
					<Input label={'Dropshiper Phone Number'} register={register} required />
				</FormDropshipper>
			</FormWrapper>
		</Wrapper>
	);
};

export default DeliveryDetails;

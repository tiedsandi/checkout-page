import React, { useContext } from 'react';
import { Heading1 } from '../../Styled';
import { FormDetails, FormDropshipper, Heading, Wrapper, WrapperForm } from './styles';
import Input from '../../components/Input';
import { FormContext } from '../../contexts/FormContext';
import CheckButtonDropshipper from '../../components/checkbutton';

const DeliveryDetails = () => {
	const { watchIsDropshipper } = useContext(FormContext);

	const regPhone = /^[0][8][0-9,+()]{6,20}$/;
	const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	return (
		<Wrapper>
			<Heading>
				<Heading1>DeliveryDetails</Heading1>
				<CheckButtonDropshipper />
			</Heading>
			<WrapperForm>
				<FormDetails>
					<Input label={'Email'} name="email" pattern={regEmail} />
					<Input label={'Phone Number'} name="phone" pattern={regPhone} />
					<Input label={'Delivery Address'} name="address" type={'text-area'} max={200} />
				</FormDetails>
				<FormDropshipper>
					<Input label={'Dropshiper Name'} name="dropshiper.name" disabled={watchIsDropshipper ? false : true} />
					<Input
						label={'Dropshiper Phone Number'}
						name="dropshiper.phone"
						pattern={regPhone}
						disabled={watchIsDropshipper ? false : true}
					/>
				</FormDropshipper>
			</WrapperForm>
		</Wrapper>
	);
};

export default DeliveryDetails;

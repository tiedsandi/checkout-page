import React, { useContext } from 'react';
import { FormContext } from '../../contexts/FormContext';
import { Box, Container, Input, Wrapper } from './styles';

const Radio = ({ name, options }) => {
	const { errors, control, Controller } = useContext(FormContext);
	return (
		<Wrapper>
			<Controller
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field }) =>
					options.map((option, index) => (
						<Container {...field} key={index}>
							<Input type="radio" name={name} value={option.value} />
							<Box className={`${errors[name] ? 'error' : ''}`}>
								<h4>{option.title}</h4>
								<h5>{option.price}</h5>
							</Box>
						</Container>
					))
				}
			/>
		</Wrapper>
	);
};

export default Radio;

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
					options.map((option, index) => {
						const { value, title, price } = option;
						const isChecked = field.value.includes(value);
						const handleRadioChange = e => {
							const newValue = [...field.value];
							if (e.target.checked) {
								newValue.push(value);
							} else {
								const index = newValue.indexOf(value);
								if (index !== -1) {
									newValue.splice(index, 1);
								}
							}
							field.onChange(newValue);
						};
						return (
							<Container {...field} key={index}>
								<Input type="radio" name={name} value={value} checked={isChecked} onChange={handleRadioChange} />
								<Box className={`${errors[name] ? 'error' : ''}`}>
									<h4>{title}</h4>
									<h5>{price}</h5>
								</Box>
							</Container>
						);
					})
				}
			/>
		</Wrapper>
	);
};

export default Radio;

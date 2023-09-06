import React, { useContext, useState } from 'react';
import { InputStyles, Label, Wrapper, ErrorIcon, SuccessIcon } from './styles';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormContext } from '../../contexts/FormContext';

const Input = ({ label, pattern, required }) => {
	const [inputHasValue, setInputHasValue] = useState(false);
	const { errors, control, Controller } = useContext(FormContext);

	return (
		<Wrapper className={`${errors[label] ? 'error' : inputHasValue ? 'success' : ''}`}>
			<Label className={`${inputHasValue ? 'active' : ''}`} htmlFor={label}>
				{label}
			</Label>
			<Controller
				name={label}
				control={control}
				defaultValue=""
				rules={{ required, pattern }}
				render={({ field }) => (
					<InputStyles
						{...field}
						type="text"
						id={label}
						onInput={() => setInputHasValue(true)}
						onBlur={e => e.target.value === '' && setInputHasValue(false)}
					/>
				)}
			/>
			{errors[label] && (
				<ErrorIcon>
					<FontAwesomeIcon icon={faTimes} />
				</ErrorIcon>
			)}
			{!errors[label] && inputHasValue && (
				<SuccessIcon>
					<FontAwesomeIcon icon={faCheck} />
				</SuccessIcon>
			)}
		</Wrapper>
	);
};

export default Input;

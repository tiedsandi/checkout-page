import React, { useContext, useEffect, useState } from 'react';
import { InputStyles, Label, Wrapper, ErrorIcon, SuccessIcon } from './styles';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormContext } from '../../contexts/FormContext';

const Input = ({ label, pattern, disabled }) => {
	const [inputHasValue, setInputHasValue] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const { errors, control, Controller, setValue } = useContext(FormContext);

	useEffect(() => {
		if (!disabled) {
			setValue(label, inputValue);
		}
	}, [inputValue, setValue, disabled, label]);

	const InputHandle = e => {
		setInputHasValue(true);
		setInputValue(e.target.value);
	};

	return (
		<Wrapper className={`${errors[label] ? 'error' : inputHasValue ? 'success' : ''}`}>
			<Label className={`${inputHasValue ? 'active' : ''}`} htmlFor={label}>
				{label}
			</Label>
			<Controller
				name={label}
				control={control}
				defaultValue={inputValue}
				disabled={disabled}
				rules={{ required: !disabled, pattern }}
				render={({ field }) => (
					<InputStyles
						{...field}
						type="text"
						id={label}
						onInput={InputHandle}
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

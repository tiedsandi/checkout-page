import React, { useContext, useEffect, useState } from 'react';
import { InputStyles, Label, Wrapper, ErrorIcon, SuccessIcon, TextAreaSyles } from './styles';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormContext } from '../../contexts/FormContext';
import CharacterCounter from '../character-counter';

const Input = ({ label, pattern, disabled, type }) => {
	const [inputHasValue, setInputHasValue] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const { errors, control, Controller, setValue, watch } = useContext(FormContext);

	const deliveryAddressValue = watch(label, '');

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
		<Wrapper>
			<Label className={`${inputHasValue ? 'active' : ''}`} htmlFor={label}>
				{label}
			</Label>
			<Controller
				name={label}
				control={control}
				defaultValue={inputValue}
				disabled={disabled}
				rules={{ required: !disabled, pattern }}
				render={({ field }) =>
					type === 'text-area' ? (
						<TextAreaSyles
							{...field}
							id={label}
							onInput={InputHandle}
							onBlur={e => e.target.value === '' && setInputHasValue(false)}
							className={`${errors[label] ? 'error' : inputHasValue ? 'success' : ''}`}
						/>
					) : (
						<InputStyles
							{...field}
							type="text"
							id={label}
							onInput={InputHandle}
							onBlur={e => e.target.value === '' && setInputHasValue(false)}
							className={`${errors[label] ? 'error' : inputHasValue ? 'success' : ''}`}
						/>
					)
				}
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
			{type === 'text-area' && <CharacterCounter value={deliveryAddressValue} maxLength={200} />}
		</Wrapper>
	);
};

export default Input;

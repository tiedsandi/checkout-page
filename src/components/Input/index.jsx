import React, { useContext, useEffect, useState } from 'react';
import { InputStyles, Label, Wrapper, ErrorIcon, SuccessIcon, TextAreaSyles } from './styles';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormContext } from '../../contexts/FormContext';
import CharacterCounter from '../character-counter';

const Input = ({ label, name, pattern, disabled, type }) => {
	const { errors, control, Controller, setValue, watch } = useContext(FormContext);
	const [inputHasValue, setInputHasValue] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const deliveryAddressValue = watch(name, '');

	const fullName = name;
	const part = name.split('.');
	const errorName = part[1] && errors[part[0]] ? errors[part[0]][part[1]] : errors[part[0]];

	// console.log(errors);
	useEffect(() => {
		if (!disabled) {
			setValue(fullName, inputValue);
		}
	}, [inputValue, setValue, disabled, fullName]);

	const InputHandle = e => {
		setInputHasValue(true);
		setInputValue(e.target.value);
	};

	return (
		<Wrapper>
			<Label className={`${inputHasValue ? 'active' : ''}`} htmlFor={fullName}>
				{label}
			</Label>
			<Controller
				name={fullName}
				control={control}
				defaultValue={inputValue}
				disabled={disabled}
				rules={{ required: !disabled, pattern }}
				render={({ field }) =>
					type === 'text-area' ? (
						<TextAreaSyles
							{...field}
							id={fullName}
							onInput={InputHandle}
							onBlur={e => e.target.value === '' && setInputHasValue(false)}
							className={`${errorName ? 'error' : inputHasValue ? 'success' : ''}`}
						/>
					) : (
						<InputStyles
							{...field}
							type="text"
							id={fullName}
							onInput={InputHandle}
							onBlur={e => e.target.value === '' && setInputHasValue(false)}
							className={`${errorName ? 'error' : inputHasValue ? 'success' : ''}`}
						/>
					)
				}
			/>
			{errorName && (
				<ErrorIcon>
					<FontAwesomeIcon icon={faTimes} />
				</ErrorIcon>
			)}
			{!errorName && inputHasValue && (
				<SuccessIcon>
					<FontAwesomeIcon icon={faCheck} />
				</SuccessIcon>
			)}
			{type === 'text-area' && <CharacterCounter value={deliveryAddressValue} maxLength={200} />}
		</Wrapper>
	);
};

export default Input;

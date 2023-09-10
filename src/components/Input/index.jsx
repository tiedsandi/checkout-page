import React, { useContext, useEffect, useState } from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FormContext } from '../../contexts/FormContext';
import CharacterCounter from '../character-counter';
import { InputStyles, Label, Wrapper, ErrorIcon, SuccessIcon, TextAreaStyles } from './styles';

const Input = ({ label, name, pattern, disabled, type, max }) => {
	const { errors, control, Controller, watchDelivery, watchAllFields } = useContext(FormContext);

	const watchInput = watchAllFields[name];
	const [inputHasValue, setInputHasValue] = useState(false);
	// @audit need to remove inputhasvalue

	const fullName = name;
	const part = name.split('.');
	const errorName = part[1] && errors[part[0]] ? errors[part[0]][part[1]] : errors[part[0]];

	const InputHandle = () => {
		setInputHasValue(true);
	};

	return (
		<Wrapper>
			<Label className={`${inputHasValue ? 'active' : ''}`} htmlFor={fullName}>
				{label}
			</Label>
			<Controller
				name={fullName}
				control={control}
				defaultValue={watchInput}
				disabled={disabled}
				rules={{ required: !disabled, pattern, maxLength: max }}
				render={({ field }) =>
					type === 'text-area' ? (
						<TextAreaStyles
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
			{type === 'text-area' && <CharacterCounter value={watchDelivery} maxLength={200} />}
		</Wrapper>
	);
};

export default Input;

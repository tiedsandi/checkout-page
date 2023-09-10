import React, { useContext } from 'react';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FormContext } from '../../contexts/FormContext';
import CharacterCounter from '../character-counter';
import { InputStyles, Label, Wrapper, ErrorIcon, SuccessIcon, TextAreaStyles } from './styles';

const Input = ({ label, name, pattern, disabled, type, max }) => {
	const { errors, control, Controller, watchDelivery, watchAllFields } = useContext(FormContext);

	const [fieldName, subFieldName] = name.split('.');
	const watchInput = subFieldName ? watchAllFields[fieldName]?.[subFieldName] : watchAllFields[fieldName];
	const errorName = subFieldName ? errors[fieldName]?.[subFieldName] : errors[fieldName];

	const isInputActive = watchInput && watchInput !== '';
	const labelClassName = isInputActive ? 'active' : '';
	const inputClassName = `${errorName ? 'error' : isInputActive ? 'success' : ''}`;
	return (
		<Wrapper>
			<Label className={labelClassName} htmlFor={name}>
				{label}
			</Label>
			<Controller
				name={name}
				control={control}
				defaultValue={watchInput}
				disabled={disabled}
				rules={{ required: !disabled, pattern, maxLength: max }}
				render={({ field }) =>
					type === 'text-area' ? (
						<TextAreaStyles {...field} id={name} className={inputClassName} />
					) : (
						<InputStyles {...field} type="text" id={name} className={inputClassName} />
					)
				}
			/>
			{errorName && (
				<ErrorIcon>
					<FontAwesomeIcon icon={faTimes} />
				</ErrorIcon>
			)}
			{!errorName && isInputActive && (
				<SuccessIcon>
					<FontAwesomeIcon icon={faCheck} />
				</SuccessIcon>
			)}
			{type === 'text-area' && <CharacterCounter value={watchDelivery} maxLength={200} />}
		</Wrapper>
	);
};

export default Input;

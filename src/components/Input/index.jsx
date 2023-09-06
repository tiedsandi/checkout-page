import React, { useContext, useState } from 'react';
import { InputStyles, Label, Wrapper, ErrorIcon, SuccessIcon } from './styles';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormContext } from '../../contexts/FormContext';

const Input = ({ label, name, pattern, required }) => {
	const [inputHasValue, setInputHasValue] = useState(false);
	const { errors, control, Controller } = useContext(FormContext);

	const handleInputFocus = () => {
		setInputHasValue(true);
	};

	const handleInputBlur = e => {
		if (e.target.value === '') {
			setInputHasValue(false);
		}
	};
	return (
		<Wrapper className={`${errors[name] ? 'error' : inputHasValue ? 'success' : ''}`}>
			<Label className={`${inputHasValue ? 'active' : ''}`} htmlFor={name}>
				{label}
			</Label>
			<Controller
				name={name}
				control={control}
				defaultValue=""
				rules={{
					required,
					pattern,
				}}
				render={({ field }) => (
					<InputStyles {...field} type="text" id={name} onFocus={handleInputFocus} onBlur={handleInputBlur} />
				)}
			/>
			{errors[name] && (
				<ErrorIcon>
					<FontAwesomeIcon icon={faTimes} />
				</ErrorIcon>
			)}
			{!errors[name] && inputHasValue && (
				<SuccessIcon>
					<FontAwesomeIcon icon={faCheck} />
				</SuccessIcon>
			)}
			{/* {errors[name] && <div className="error-message">This field is required and should match the pattern.</div>} */}
		</Wrapper>
	);
};

export default Input;

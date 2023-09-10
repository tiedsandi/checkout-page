import React, { useContext } from 'react';
import { FormContext } from '../../contexts/FormContext';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CheckBox, Wrapper, Input } from './styles';

const CheckButtonDropshipper = () => {
	const { isDropshipper, setIsDropshipper, register } = useContext(FormContext);

	const handleToggle = () => {
		setIsDropshipper(!isDropshipper);
	};
	return (
		<Wrapper onChange={handleToggle}>
			<Input type="checkbox" {...register('dropshiper.isdropshiper')} defaultChecked={false} />
			<CheckBox checked={isDropshipper}>
				{isDropshipper ? (
					<FontAwesomeIcon icon={faCheck} className="icon" />
				) : (
					<FontAwesomeIcon icon={faCheck} className="icon" style={{ visibility: 'hidden' }} />
				)}
			</CheckBox>
			Send as dropshipper
		</Wrapper>
	);
};

export default CheckButtonDropshipper;

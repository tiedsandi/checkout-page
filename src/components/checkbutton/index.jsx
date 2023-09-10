import React, { useContext } from 'react';
import { FormContext } from '../../contexts/FormContext';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CheckBox, Wrapper, Input } from './styles';

const CheckButtonDropshipper = () => {
	const { watchIsDropshipper, Controller, control } = useContext(FormContext);

	return (
		<Wrapper>
			<Controller
				name="isdropshipper"
				control={control}
				render={({ field }) => <Input type="checkbox" {...field} defaultChecked={watchIsDropshipper} />}
			/>
			<CheckBox checked={watchIsDropshipper}>
				<FontAwesomeIcon
					icon={faCheck}
					className="icon"
					style={{ visibility: watchIsDropshipper ? 'visible' : 'hidden' }}
				/>
			</CheckBox>
			Send as dropshipper
		</Wrapper>
	);
};

export default CheckButtonDropshipper;

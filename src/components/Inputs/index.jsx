import React from 'react';

const Input = ({ label, register, required }) => {
	return (
		<div>
			<label htmlFor="label">{label}</label>
			<input {...register(label, { required })} />
		</div>
	);
};

export default Input;

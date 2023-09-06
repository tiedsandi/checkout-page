import { createContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

export const FormContext = createContext({
	isDropshipper: false,
	setIsDropshipper: () => {},
});

export const FormProvider = ({ children }) => {
	const { register, handleSubmit, formState, setValue, getValues, reset, watch, control } = useForm({
		mode: 'onChange',
	});
	const { errors } = formState;
	const [isDropshipper, setIsDropshipper] = useState(false);

	const value = {
		register,
		handleSubmit,
		errors,
		setValue,
		getValues,
		reset,
		watch,
		control,
		Controller,
		isDropshipper,
		setIsDropshipper,
	};

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

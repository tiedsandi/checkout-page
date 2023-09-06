import { createContext } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
	const { register, handleSubmit, formState, setValue, getValues, reset, watch, control } = useForm({
		mode: 'onChange',
	});
	const { errors } = formState;

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
	};

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

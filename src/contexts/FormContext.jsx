import { createContext } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import useLocalStorage from 'use-local-storage';

export const FormContext = createContext({
	isDropshipper: false,
	setIsDropshipper: () => {},
});

export const FormProvider = ({ children }) => {
	const { register, handleSubmit, formState, setValue, getValues, reset, watch, control } = useForm({
		mode: 'onChange',
		defaultValues: {
			id: '',
			email: '',
			phone: '',
			address: '',
			shipment: '',
			payment: '',
			isdropshipper: false,
			dropshiper: { name: '', phone: '' },
		},
	});

	const { errors } = formState;
	const watchIsDropshipper = watch('isdropshipper', false);
	const watchShipment = watch('shipment');
	const watchPayment = watch('payment');
	const watchDelivery = watch('address', '');
	const watchAllFields = watch();

	const [data, setData] = useLocalStorage('dataTransaction', null);

	const value = {
		register,
		handleSubmit,
		errors,
		setValue,
		getValues,
		reset,
		control,
		Controller,
		data,
		setData,
		watchIsDropshipper,
		watchAllFields,
		watchShipment,
		watchPayment,
		watchDelivery,
	};

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

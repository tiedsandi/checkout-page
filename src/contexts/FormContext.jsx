import { createContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import useLocalStorage from 'use-local-storage';

export const FormContext = createContext({
	isDropshipper: false,
	setIsDropshipper: () => {},
});

function generateRandomID(length) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let randomID = '';

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		randomID += characters.charAt(randomIndex);
	}

	return randomID;
}

export const FormProvider = ({ children }) => {
	const [dataTransaction, setDataTransaction] = useLocalStorage('data-transaction', null);
	const { register, handleSubmit, formState, setValue, getValues, reset, watch, control } = useForm({
		mode: 'onChange',
		defaultValues: {
			id: generateRandomID(6),
			email: '',
			phone: '',
			address: '',
			shipment: '',
			payment: '',
			isdropshipper: false,
			dropshiper: { name: '', phone: '' },
		},
	});

	useEffect(() => {
		if (dataTransaction) {
			setValue('id', dataTransaction.id);
			setValue('email', dataTransaction.email);
			setValue('phone', dataTransaction.phone);
			setValue('address', dataTransaction.address);
			setValue('shipment', dataTransaction.shipment);
			setValue('payment', dataTransaction.payment);
			setValue('isdropshipper', dataTransaction.isdropshipper);
			setValue('dropshiper.name', dataTransaction.dropshiper.name);
			setValue('dropshiper.phone', dataTransaction.dropshiper.phone);
		}
	}, [dataTransaction, setValue]);

	const { errors } = formState;
	const watchIsDropshipper = watch('isdropshipper');
	const watchShipment = watch('shipment');
	const watchPayment = watch('payment');
	const watchDelivery = watch('address', '');
	const watchAllFields = watch();

	const value = {
		register,
		handleSubmit,
		errors,
		setValue,
		getValues,
		reset,
		control,
		Controller,
		dataTransaction,
		setDataTransaction,
		watchIsDropshipper,
		watchAllFields,
		watchShipment,
		watchPayment,
		watchDelivery,
	};

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

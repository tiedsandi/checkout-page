import { createContext } from 'react';
import useLocalStorage from 'use-local-storage';

export const CheckoutContext = createContext({
	pageRender: '',
	setPageRender: () => {},
});

export const CheckoutProvider = ({ children }) => {
	const [pageRender, setPageRender] = useLocalStorage('page-render', 'delivery');
	const value = { pageRender, setPageRender };

	return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

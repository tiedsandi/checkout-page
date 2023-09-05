import { createContext, useState } from "react";

export const CheckoutContext = createContext({
	pageRender: "",
	setPageRender: () => {},
});

export const CheckoutProvider = ({ children }) => {
	const [pageRender, setPageRender] = useState("delivery");
	const value = { pageRender, setPageRender };

	return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

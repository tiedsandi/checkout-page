import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CheckoutProvider } from "./contexts/CheckoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CheckoutProvider>
			<App />
		</CheckoutProvider>
	</React.StrictMode>
);

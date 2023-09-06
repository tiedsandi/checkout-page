import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CheckoutProvider } from './contexts/CheckoutContext';
import { FormProvider } from './contexts/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CheckoutProvider>
			<FormProvider>
				<App />
			</FormProvider>
		</CheckoutProvider>
	</React.StrictMode>
);

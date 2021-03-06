import App from 'components/App/App';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './utils/themaChakra';
import './index.css';
import { StoreProvider } from 'utils/useData';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
	<StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<StoreProvider>
					<App />
				</StoreProvider>
			</ChakraProvider>
		</BrowserRouter>
	</StrictMode>
);

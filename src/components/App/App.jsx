import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Step1 } from './Step/Step1';
import { Step2 } from './Step/Step2';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Step1 />} />
				<Route path="step2" element={<Step2 />} />
			</Route>
		</Routes>
	);
}

export default App;

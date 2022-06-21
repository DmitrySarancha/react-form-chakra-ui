import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Result } from './Step/Result';
import { Step1 } from './Step/Step1';
import { Step2 } from './Step/Step2';
import { Step3 } from './Step/Step3';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Step1 />} />
				<Route path="step2" element={<Step2 />} />
				<Route path="step3" element={<Step3 />} />
				<Route path="result" element={<Result />} />
			</Route>
		</Routes>
	);
}

export default App;

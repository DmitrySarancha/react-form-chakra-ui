import { createContext, useContext, useState } from 'react';

const DataContext = createContext({});

export const StoreProvider = ({ children }) => {
	const [store, setStore] = useState({});

	const setValues = data => {
		setStore(prevData => ({
			...prevData,
			...data,
		}));
	};

	return (
		<DataContext.Provider value={[store, setValues]}>
			{children}
		</DataContext.Provider>
	);
};

export const useData = () => useContext(DataContext);

import React, { createContext } from 'react';

import api from './../Service/api';

interface AuthContextState{
	rifa: string;
	checkRifa(): Promise<void>;
}

export const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({children}) => {

	async function checkRifa(){
		const response = await api.get('/users');

		console.log(response.data);
	}

	return(
		<AuthContext.Provider value={{rifa: '189', checkRifa}}>
			{children}
		</AuthContext.Provider>
		);
}

import React from 'react';
import AppContext from './AppContext';

interface AppProviderProps {
    name: string;
};

const AppProvider: React.FC<AppProviderProps> = ({ children, name }) => {
    return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>
};

export default AppProvider;
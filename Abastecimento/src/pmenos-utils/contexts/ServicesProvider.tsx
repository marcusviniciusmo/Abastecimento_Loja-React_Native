import React from 'react';
import { IService } from '../types';
import ServicesContext from './ServicesContext';

export interface ServicesProviderProps {
    services: Array<IService>;
};

const ServicesProvider: React.FC<ServicesProviderProps> = ({
    children,
    services,
}) => {
    return (
        <ServicesContext.Provider value={{ services }}>
            {children}
        </ServicesContext.Provider>
    );
};

export default ServicesProvider;
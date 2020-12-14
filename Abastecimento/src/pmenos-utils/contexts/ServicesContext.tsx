import React from 'react';
import { IServicesContext } from '../types';

const ServicesContext = React.createContext<IServicesContext>({
    services: [],
});

export default ServicesContext;
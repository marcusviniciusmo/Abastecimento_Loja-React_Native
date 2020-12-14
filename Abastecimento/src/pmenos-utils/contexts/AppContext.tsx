import React from 'react';
import { IAppContext } from '../types';

const AppContext = React.createContext<IAppContext>({} as IAppContext);

export default AppContext;
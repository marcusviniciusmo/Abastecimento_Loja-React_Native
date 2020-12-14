import { createContext } from 'react';

import { IAuthContext } from '../types';

export default createContext<IAuthContext>({} as IAuthContext);
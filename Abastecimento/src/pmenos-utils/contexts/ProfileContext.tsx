import { createContext } from "react";

import { IProfileContext } from '../types';

export default createContext<IProfileContext>({} as IProfileContext);
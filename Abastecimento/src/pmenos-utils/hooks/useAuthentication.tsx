import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const useAuthentication = () => {
    const context =  useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuthentication must be used within a AuthProvider');
    }

    return context;
};

export default useAuthentication;
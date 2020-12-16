import React from 'react';
import ProfileProvider from './pmenos-utils/contexts/ProfileProvider';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Views/Login';

const App = () => {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </ProfileProvider>
  )
};

export default App;
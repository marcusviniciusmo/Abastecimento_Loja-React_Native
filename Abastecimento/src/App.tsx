import React from 'react';
import AppProvider from './pmenos-utils/contexts/AppProvider';
import { StatusBar } from 'react-native';
import ServicesProvider from './pmenos-utils/contexts/ServicesProvider';
import services from './pmenos-utils/config/services';

const App = () => {
  return (
    <AppProvider name="Abastecimento">
      <StatusBar backgroundColor={'#00469B'}/>
      <ServicesProvider services={services}>

      </ServicesProvider>
    </AppProvider>
  )
};

export default App;
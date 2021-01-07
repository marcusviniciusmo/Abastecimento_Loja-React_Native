// import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { routes } from '../Utils';
import Login from '../Views/Login';
import PrimeirasConfiguracoes from '../Views/PrimeirasConfiguracoes';
import Menu from '../Views/Menu';
import AbrirCaminhao from '../Views/AbrirCaminhao';
import MontarCaminhao from '../Views/MontarCaminhao';
import FecharCaminhao from '../Views/FecharCaminhao';
import EmbarcarCaminhao from '../Views/EmbarcarCaminhao';
import ModificarPlaca from '../Views/ModificarPlaca';
import ForcarEncerramento from '../Views/ForcarEncerramento';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}}>
                <Stack.Screen name={routes.login} component={Login} />
                <Stack.Screen name={routes.primeirasConfiguracoes} component={PrimeirasConfiguracoes} />
                <Stack.Screen name={routes.menu} component={Menu} />
                <Stack.Screen name={routes.abrirCaminhao} component={AbrirCaminhao}/>
                <Stack.Screen name={routes.montarCaminhao} component={MontarCaminhao}/>
                <Stack.Screen name={routes.fecharCaminhao} component={FecharCaminhao}/>
                <Stack.Screen name={routes.embarcarCaminhao} component={EmbarcarCaminhao} />
                <Stack.Screen name={routes.modificarPlacaDoCaminhao} component={ModificarPlaca}/>
                <Stack.Screen name={routes.forcarEncerramento} component={ForcarEncerramento}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
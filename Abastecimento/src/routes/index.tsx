// import { createAppContainer } from 'react-navigation';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Views/Login';
import { NavigationContainer } from '@react-navigation/native';
import PrimeirasConfiguracoes from '../Views/PrimeirasConfiguracoes';
import Menu from '../Views/Menu';
import AbrirCaminhao from '../Views/AbrirCaminhao';

// const Routes = createAppContainer(
//     createStackNavigator({
//         Login: Login,
//         PrimeirasConfiguracoes: PrimeirasConfiguracoes,
//         Menu: Menu,
//         AbrirCaminhao: AbrirCaminhao,
//     })
// );

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='PrimeirasConfiguracoes' component={PrimeirasConfiguracoes} />
                <Stack.Screen name='Menu' component={Menu} />
                <Stack.Screen name='AbrirCaminhao' component={AbrirCaminhao}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
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
import ConsultarCaminhao from '../Views/ConsultarCaminhao';
import VolumesNaoEscaneados from '../Views/VolumesNaoEscaneados';
import FiliaisNaoEmbarcadas from '../Views/FiliaisNaoEmbarcadas';
import ConsultarPorCodigoDeBarras from '../Views/ConsultarPorCodigoDeBarras';
import ConsultarPorEndereco from '../Views/ConsultarPorEndereco';
import PedidosNaoImpressos from '../Views/PedidosNaoImpressos';
import ReposicaoDaLinha from '../Views/ReposicaoDaLinha';
import FinalizarReposicao from '../Views/FinalizarReposicao';
import ConsultarPedido from '../Views/ConsultarPedido';
import CriarConferencia from '../Views/CriarConferencia';
import Conferir from '../Views/Conferir';
import ExcluirConferencia from '../Views/ExcluirConferencia';
import ModificarProdutoSemLote from '../Views/ModificarProdutoSemLote';
import ResultadosConsultarCaminhao from '../Views/ConsultarCaminhao/resultados';

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
                <Stack.Screen name={routes.consultarCaminhao} component={ConsultarCaminhao}/>
                <Stack.Screen name={routes.volumesNaoEscaneados} component={VolumesNaoEscaneados}/>
                <Stack.Screen name={routes.filiaisNaoEmbarcadas} component={FiliaisNaoEmbarcadas} />

                <Stack.Screen name={routes.resultadosConsultarcaminhao} component={ResultadosConsultarCaminhao}/>

                <Stack.Screen name={routes.consultarPorCodigoDeBarras} component={ConsultarPorCodigoDeBarras} />
                <Stack.Screen name={routes.consultarPorEndereco} component={ConsultarPorEndereco}/>
                <Stack.Screen name={routes.pedidosNaoImpressos} component={PedidosNaoImpressos}/>
                <Stack.Screen name={routes.reposicaoDaLinha} component={ReposicaoDaLinha}/>
                <Stack.Screen name={routes.finalizarReposicao} component={FinalizarReposicao}/>
                <Stack.Screen name={routes.consultarPedido} component={ConsultarPedido} />
                <Stack.Screen name={routes.criarConferencia} component={CriarConferencia}/>
                <Stack.Screen name={routes.conferir} component={Conferir}/>
                <Stack.Screen name={routes.excluirConferencia} component={ExcluirConferencia}/>
                <Stack.Screen name={routes.modificarProdutoSemLote} component={ModificarProdutoSemLote}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;
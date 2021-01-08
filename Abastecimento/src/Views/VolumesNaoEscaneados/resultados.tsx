import React from 'react';
import { ContainerPrincipal, InitialCircle, ResultadoButton, TextCircle } from '../../AppStyles';
import BarView from '../../Components/BarView';
import HeaderView from '../../Components/HeaderView';
import { NavigationProps } from '../../pmenos-utils/types';
import { iconBack, settingsIcon, featherIcons } from '../../Utils';
import Icon from 'react-native-vector-icons/Feather';

const ResultadosVolumesNaoEscaneados: React.FC<NavigationProps> = ({ navigation, route }) => {

    const volumesNaoEscaneados = [{
        id: 1,
    },
    {
        id: 2,
    }]

    return (
        <ContainerPrincipal>
            <HeaderView
                title={`${route.params.placaVeiculoInput.toString().toUpperCase()} - ${route.params.numeroPedidoInput} - Filial ${route.params.filialInput}`}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <BarView text={'Voumes não escaneados'} />
            <>
                {
                    volumesNaoEscaneados.map((v) => {
                        return (
                            <ResultadoButton key={v.id}
                                option={v.id}>
                                <InitialCircle option={v.id}>
                                    <TextCircle>{<Icon name={featherIcons.package} size={20} color={'#ccc'} />}</TextCircle>
                                </InitialCircle>
                            </ResultadoButton>
                        )
                    })
                }
            </>
        </ContainerPrincipal>
    )
};

export default ResultadosVolumesNaoEscaneados;
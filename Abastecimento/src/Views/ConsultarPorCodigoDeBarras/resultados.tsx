import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ContainerPrincipal, InitialCircle, ResultadoButton, TextCircle, TextExposed } from '../../AppStyles';
import BarView from '../../Components/BarView';
import HeaderView from '../../Components/HeaderView';
import { iconBack, settingsIcon } from '../../Utils';

const ResultadosConsultarPorCodigoDeBarras: React.FC = ({ navigation, route }) => {
    return (
        <ContainerPrincipal>
            <HeaderView
                title={route.params.codigoBarras}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <BarView text={route.params.descricao} />
            <>
                <ResultadoButton key={route.params.id}
                    option={route.params.id}>
                    <InitialCircle option={route.params.id}>
                        <TextCircle>{route.params.id}</TextCircle>
                    </InitialCircle>
                    <TextExposed option={route.params.id}>{route.params.id}</TextExposed>
                    <TextExposed option={route.params.id}>{route.params.categoria}</TextExposed>
                </ResultadoButton>
            </>
        </ContainerPrincipal>
    )
};

export default ResultadosConsultarPorCodigoDeBarras;
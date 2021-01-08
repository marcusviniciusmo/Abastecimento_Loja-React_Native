import React from 'react';
import { ContainerPrincipal, InitialCircle, ResultadoButton, TextCircle, TextExposed } from '../../AppStyles';
import BarView from '../../Components/BarView';
import HeaderView from '../../Components/HeaderView';
import { iconBack, settingsIcon } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';

const ResultadosConsultarPorCodigoDeBarras: React.FC<NavigationProps> = ({ navigation, route }) => {
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
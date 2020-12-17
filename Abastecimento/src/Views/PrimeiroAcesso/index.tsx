import React from 'react';
import HeaderView from '../../Components/HeaderView';
import { ContainerPrincipal } from '../../AppStyles';
import BarView from '../../Components/BarView';
import TipBottomView from '../../Components/TipBottomView';

const PrimeiroAcesso: React.FC = () => {
    const tipText = 'Selecione um Centro de Distribuição para continuar';
    const titleHeader = 'Primeiras configurações';
    const textBar = 'Centro de Distribuição';

    return (
        <ContainerPrincipal>
            <HeaderView title={titleHeader} />
            <BarView
                text={textBar}
            />
            <TipBottomView text={tipText}/>
        </ContainerPrincipal>
    )
};

export default PrimeiroAcesso;
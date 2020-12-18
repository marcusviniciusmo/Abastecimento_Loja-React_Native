import React from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import BarView from '../../Components/BarView';
import TipBottomView from '../../Components/TipBottomView';

const PrimeiroAcesso: React.FC = () => {
    const titleHeader = 'Primeiras configurações';
    const textBar = 'Centro de Distribuição';
    const tipText = 'Selecione um Centro de Distribuição para continuar';

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
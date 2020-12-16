import React from 'react';
import HeaderView from '../../Components/HeaderView';
import { Container } from './styles';
import BarView from '../../Components/BarView';
import TipBottomView from '../../Components/TipBottomView';

const PrimeiroAcesso: React.FC = () => {
    const tipText = 'Selecione um Centro de Distribuição para continuar'

    return (
        <Container>
            <HeaderView title={'Primeiras configurações'} />
            <BarView
                text={'Centro de Distribuição'}
            />
            <TipBottomView text={tipText}/>
        </Container>
    )
};

export default PrimeiroAcesso;
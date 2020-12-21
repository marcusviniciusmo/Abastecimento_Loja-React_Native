import React, { useState } from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import { Container } from './styles';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';

const FecharCaminhao: React.FC = () => {
    const headerText = 'Fechar Caminhão';
    const tipText = 'Informe a Placa do Veículo para continuar';
    const size = 25;
    const height = 60;

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={headerText}
                iconBack='arrow-left'
                settings='more-vertical'
            />
            <Container>
            <Input
                name='placa-veiculo'
                icon='truck'
                placeholder={'Placa do veículo'}
                onChangeText={setPlacaVeiculoInput}
                size={size}
                height={height}
                bordered
            />
            </Container>
            <TipBottomView text={tipText} />
        </ContainerPrincipal>
    )
};

export default FecharCaminhao;
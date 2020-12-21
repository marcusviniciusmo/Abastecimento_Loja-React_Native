import React, { useState } from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { Container } from './styles';
import WarnSwitch from '../../Components/WarnSwitch';

const AbrirCaminhao: React.FC = () => {
    const titleHeader = 'Abrir Caminhão';
    const tipText = 'Informe a Placa do veículo para continuar';
    const warnTextOff = 'Deseja reabrir o caminhão?'
    const warnTextOn = 'Sim, desejo reabrir o caminhão.'
    const size = 25;
    const height = 70;

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={titleHeader}
                iconBack='arrow-left'
                settings='more-vertical'
            />
            <Container>
                <Input
                    name="placa-veiculo"
                    icon="truck"
                    placeholder={'Placa do veículo'}
                    onChangeText={setPlacaVeiculoInput}
                    size={size}
                    height={height}
                    bordered
                />
                <WarnSwitch
                    textOff={warnTextOff}
                    textOn={warnTextOn}
                />
            </Container>
            <TipBottomView text={tipText} />
        </ContainerPrincipal>
    )
};

export default AbrirCaminhao;
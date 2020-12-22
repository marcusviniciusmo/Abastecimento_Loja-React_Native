import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import WarningSwitch from '../../Components/WarningSwitch';
import { sizeDefaultInput, heightDefaultInput } from '../../Utils';

const AbrirCaminhao: React.FC = () => {
    const titleHeader = 'Abrir Caminhão';
    const tipText = 'Informe a Placa do veículo para continuar';
    const warnTextOff = 'Deseja reabrir o caminhão?'
    const warnTextOn = 'Sim, desejo reabrir o caminhão.'

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
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <WarningSwitch
                    textOff={warnTextOff}
                    textOn={warnTextOn}
                />
            </Container>
            <TipBottomView text={tipText} />
        </ContainerPrincipal>
    )
};

export default AbrirCaminhao;
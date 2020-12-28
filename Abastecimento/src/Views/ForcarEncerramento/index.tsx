import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { sizeDefaultInput, heightDefaultInput, iconBack, settingsIcon } from '../../Utils';

const ForcarEncerramento: React.FC = () => {
    const headerText = 'Forçar Encerramento';
    const tipText = 'Informe todos os campos para continuar';

    const [placaVeiculo, setPlacaVeiculo] = useState('');
    const [numeroPedido, setNumeroPedido] = useState('');
    const [filial, setFilial] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={headerText}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='placa-veiculo'
                    icon='truck'
                    placeholder={'Placa do veículo'}
                    onChangeText={setPlacaVeiculo}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <Input
                    name='numero-pedido'
                    icon='hash'
                    placeholder={'Número do pedido'}
                    onChangeText={setNumeroPedido}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <Input
                    name='filial'
                    icon='home'
                    placeholder={'Filial'}
                    onChangeText={setFilial}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
            </Container>
            <TipBottomView
                text={tipText}
            />
        </ContainerPrincipal>
    )
};

export default ForcarEncerramento;
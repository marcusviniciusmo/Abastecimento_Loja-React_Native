import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { sizeDefaultInput, heightDefaultInput, iconBack, settingsIcon } from '../../Utils';

const VolumesNaoEscaneados: React.FC = () => {
    const headerText = 'Volumes Não Escaneados';
    const tipText = 'Informe todos os campos para continar'

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [numeroPedidoInput, seNumeroPedidoInput] = useState('');
    const [filialInput, setFilialInput] = useState('');

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
                    onChangeText={setPlacaVeiculoInput}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <Input
                    name='numero-pedido'
                    icon='hash'
                    placeholder={'Número do pedido'}
                    onChangeText={seNumeroPedidoInput}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <Input
                    name='filial'
                    icon='home'
                    placeholder={'Filial'}
                    onChangeText={setFilialInput}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText} />
        </ContainerPrincipal>
    )
};

export default VolumesNaoEscaneados;
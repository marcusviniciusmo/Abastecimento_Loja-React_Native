import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import TagToInsert from '../../Components/TagToInsert';

const MontarCaminhao: React.FC = () => {
    const titleHeader = 'Montar Caminhão';
    const tipText = 'Informe todos os campos para continuar';
    const size = 25;
    const height = 60;

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [numeroPedidoInput, setNumeroPedidoInput] = useState('');
    const [filialInput, setFilialInput] = useState('');
    const [inserirEtiquetaInput, setInserirEtiquetaInput] = useState('');

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
                <Input
                    name="numero-pedido"
                    icon="hash"
                    placeholder={'Número do pedido'}
                    onChangeText={setNumeroPedidoInput}
                    size={size}
                    height={height}
                    bordered
                />
                <Input
                    name="filial"
                    icon="home"
                    placeholder={'Filial'}
                    onChangeText={setFilialInput}
                    size={size}
                    height={height}
                    bordered
                />
                <Input
                    name="inserir-etiqueta"
                    icon="plus"
                    placeholder={'Inserir etiqueta'}
                    onChangeText={setInserirEtiquetaInput}
                    size={size}
                    height={height}
                    bordered
                />
                <TagToInsert />
            </Container>
            <TipBottomView
                text={tipText}
            />
        </ContainerPrincipal>
    )
};

export default MontarCaminhao;
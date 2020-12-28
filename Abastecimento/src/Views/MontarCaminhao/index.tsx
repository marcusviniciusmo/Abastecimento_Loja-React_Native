import React, { useEffect, useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import TagToInsert from '../../Components/TagToInsert';
import { sizeDefaultInput, heightDefaultInput, iconBack, settingsIcon } from '../../Utils';

const MontarCaminhao: React.FC = () => {
    const titleHeader = 'Montar Caminhão';
    const tipText = 'Informe todos os campos para continuar';

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [numeroPedidoInput, setNumeroPedidoInput] = useState('');
    const [filialInput, setFilialInput] = useState('');
    const [inserirEtiquetaInput, setInserirEtiquetaInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={titleHeader}
                iconBack={iconBack}
                settings={settingsIcon}
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
                <Input
                    name="numero-pedido"
                    icon="hash"
                    placeholder={'Número do pedido'}
                    onChangeText={setNumeroPedidoInput}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <Input
                    name="filial"
                    icon="home"
                    placeholder={'Filial'}
                    onChangeText={setFilialInput}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <Input
                    name="inserir-etiqueta"
                    icon="plus"
                    placeholder={'Inserir etiqueta'}
                    onChangeText={setInserirEtiquetaInput}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <TagToInsert />
            </Container>
            <TipBottomView text={tipText}/>
        </ContainerPrincipal>
    )
};

export default MontarCaminhao;
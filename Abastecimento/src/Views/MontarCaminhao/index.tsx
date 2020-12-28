import React, { useEffect, useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import TagToInsert from '../../Components/TagToInsert';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';

const MontarCaminhao: React.FC = () => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [numeroPedidoInput, setNumeroPedidoInput] = useState('');
    const [filialInput, setFilialInput] = useState('');
    const [inserirEtiquetaInput, setInserirEtiquetaInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.montarCaminhao}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='placa-veiculo'
                    icon={featherIcons.truck}
                    placeholder={placeholder.placaVeiculo}
                    onChangeText={setPlacaVeiculoInput}
                    bordered
                />
                <Input
                    name='numero-pedido'
                    icon={featherIcons.hash}
                    placeholder={placeholder.numeroPedido}
                    onChangeText={setNumeroPedidoInput}
                    bordered
                />
                <Input
                    name='filial'
                    icon={featherIcons.home}
                    placeholder={placeholder.filial}
                    onChangeText={setFilialInput}
                    bordered
                />
                <Input
                    name='inserir-etiqueta'
                    icon={featherIcons.plus}
                    placeholder={placeholder.inserirEtiqueta}
                    onChangeText={setInserirEtiquetaInput}
                    bordered
                />
                <TagToInsert />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default MontarCaminhao;
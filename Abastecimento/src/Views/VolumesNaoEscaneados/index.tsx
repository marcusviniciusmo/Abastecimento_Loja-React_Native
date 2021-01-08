import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';

const VolumesNaoEscaneados: React.FC<NavigationProps> = ({ navigation }) => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [numeroPedidoInput, seNumeroPedidoInput] = useState('');
    const [filialInput, setFilialInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.volumesNaoEscaneados}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
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
                    onChangeText={seNumeroPedidoInput}
                    bordered
                />
                <Input
                    name='filial'
                    icon={featherIcons.home}
                    placeholder={placeholder.filial}
                    onChangeText={setFilialInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos} />
        </ContainerPrincipal>
    )
};

export default VolumesNaoEscaneados;
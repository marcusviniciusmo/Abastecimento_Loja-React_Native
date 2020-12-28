import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';

const ForcarEncerramento: React.FC = () => {
    const [placaVeiculo, setPlacaVeiculo] = useState('');
    const [numeroPedido, setNumeroPedido] = useState('');
    const [filial, setFilial] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.forcarEncerramento}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='placa-veiculo'
                    icon={featherIcons.truck}
                    placeholder={placeholder.placaVeiculo}
                    onChangeText={setPlacaVeiculo}
                    bordered
                />
                <Input
                    name='numero-pedido'
                    icon={featherIcons.hash}
                    placeholder={placeholder.numeroPedido}
                    onChangeText={setNumeroPedido}
                    bordered
                />
                <Input
                    name='filial'
                    icon={featherIcons.home}
                    placeholder={placeholder.filial}
                    onChangeText={setFilial}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ForcarEncerramento;
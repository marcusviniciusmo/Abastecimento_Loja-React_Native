import React, { useState } from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import { Container } from './styles';
import HeaderView from '../../Components/HeaderView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import BarView from '../../Components/BarView';

const ConsultarPedido: React.FC = () => {
    const [dataDoPedidoInput, setDataDoPedidoInput] = useState('');
    const [ruaInput, setRuaInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.consultarPedido}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='data-pedido'
                    icon={featherIcons.calendar}
                    placeholder={placeholder.dataPedido}
                    onChangeText={setDataDoPedidoInput}
                    bordered
                />
                <Input
                    name='rua'
                    icon={featherIcons.home}
                    placeholder={placeholder.rua}
                    onChangeText={setRuaInput}
                    bordered
                />
            </Container>
            <TipBottomView
                top='33'
                text={tipText.informe_Todos_Campos}
                inputAlign
            />
            <BarView text={'Resultados'}/>
        </ContainerPrincipal>
    )
};

export default ConsultarPedido;
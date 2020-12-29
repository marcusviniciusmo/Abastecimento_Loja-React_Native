import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';

const PedidosNaoImpressos: React.FC = () => {
    const [data, setData] = useState('');
    const [rua, setRua] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.pedidosNaoImpressos}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='data'
                    icon={featherIcons.calendar}
                    placeholder={placeholder.data}
                    onChangeText={setData}
                    bordered
                />
                <Input
                    name='rua'
                    icon={featherIcons.home}
                    placeholder={placeholder.rua}
                    onChangeText={setRua}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default PedidosNaoImpressos;
import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';

const PedidosNaoImpressos: React.FC<NavigationProps> = ({ navigation }) => {
    const [dataInput, setDataInput] = useState('');
    const [ruaInput, setRuaInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.pedidosNaoImpressos}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <Container>
                <Input
                    name='data'
                    icon={featherIcons.calendar}
                    placeholder={placeholder.data}
                    onChangeText={setDataInput}
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
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default PedidosNaoImpressos;
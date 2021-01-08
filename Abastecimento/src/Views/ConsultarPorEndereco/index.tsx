import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';

const ConsultarPorEndereco: React.FC<NavigationProps> = ({ navigation }) => {
    const [enderecoInput, setEnderecoInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.consultarPorEndereco}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <Container>
                <Input
                    name='endereco'
                    icon={featherIcons.home}
                    placeholder={placeholder.endereco}
                    onChangeText={setEnderecoInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ConsultarPorEndereco;
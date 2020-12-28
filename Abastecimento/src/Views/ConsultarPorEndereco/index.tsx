import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';

const ConsultarPorEndereco: React.FC = () => {
    const [endereco, setEndereco] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.consultarPorEndereco}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='endereco'
                    icon={featherIcons.home}
                    placeholder={placeholder.endereco}
                    onChangeText={setEndereco}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ConsultarPorEndereco;
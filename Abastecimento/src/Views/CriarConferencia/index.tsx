import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';

const CriarConferencia: React.FC = () => {
    const [identificadorConferencia, setIdentificadorConferencia] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.criarConferencia}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='identificador-conferencia'
                    icon={featherIcons.hash}
                    placeholder={placeholder.identificadorConferencia}
                    onChangeText={setIdentificadorConferencia}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default CriarConferencia;
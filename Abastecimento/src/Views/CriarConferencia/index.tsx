import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';

const CriarConferencia: React.FC = () => {
    const [identificadorConferenciaInput, setIdentificadorConferenciaInput] = useState('');

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
                    onChangeText={setIdentificadorConferenciaInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default CriarConferencia;
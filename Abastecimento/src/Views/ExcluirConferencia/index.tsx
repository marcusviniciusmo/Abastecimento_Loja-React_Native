import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';

const ExcluirConferencia: React.FC = () => {
    const [excluirConferenciaInput, setExcluirConferenciaInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.excluirConferencia}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='excluir-conferencia'
                    icon={featherIcons.hash}
                    placeholder={placeholder.excluirConferencia}
                    onChangeText={setExcluirConferenciaInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ExcluirConferencia;
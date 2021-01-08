import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { NavigationProps } from '../../pmenos-utils/types';

const ExcluirConferencia: React.FC<NavigationProps> = ({ navigation }) => {
    const [excluirConferenciaInput, setExcluirConferenciaInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.excluirConferencia}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
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
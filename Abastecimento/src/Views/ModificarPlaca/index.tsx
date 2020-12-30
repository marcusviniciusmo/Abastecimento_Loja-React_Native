import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';

const ModificarPlaca: React.FC = () => {
    const [placaAtualInput, setPlacaAtualInput] = useState('');
    const [novaPlacaInput, setNovaPlacaInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.modificarPlaca}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='placa-atual'
                    icon={featherIcons.hash}
                    placeholder={placeholder.placaAtual}
                    onChangeText={setPlacaAtualInput}
                    bordered
                />
                <Input
                    name='nova-placa'
                    icon={featherIcons.hash}
                    placeholder={placeholder.novaPlaca}
                    onChangeText={setNovaPlacaInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ModificarPlaca;
import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';

const ModificarPlaca: React.FC = () => {
    const [placaAtual, setPlacaAtual] = useState('');
    const [novaPlaca, setNovaPlaca] = useState('');

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
                    onChangeText={setPlacaAtual}
                    bordered
                />
                <Input
                    name='nova-placa'
                    icon={featherIcons.hash}
                    placeholder={placeholder.novaPlaca}
                    onChangeText={setNovaPlaca}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ModificarPlaca;
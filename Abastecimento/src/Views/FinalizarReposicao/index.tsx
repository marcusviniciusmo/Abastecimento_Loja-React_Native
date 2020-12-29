import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';

const FinalizarReposicao: React.FC = () => {
    const [identificadorDaReposicao, setIdentificadorDaReposicao] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.finalizarReposicao}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='identificador-reposicao'
                    icon={featherIcons.hash}
                    placeholder={placeholder.identificadorDaReposicao}
                    onChangeText={setIdentificadorDaReposicao}
                    iconRight={featherIcons.camera}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default FinalizarReposicao;
import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { NavigationProps } from '../../pmenos-utils/types';

const FinalizarReposicao: React.FC<NavigationProps> = ({ navigation }) => {
    const [identificadorDaReposicaoInput, setIdentificadorDaReposicaoInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.finalizarReposicao}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <Container>
                <Input
                    name='identificador-reposicao'
                    icon={featherIcons.hash}
                    placeholder={placeholder.identificadorDaReposicao}
                    onChangeText={setIdentificadorDaReposicaoInput}
                    iconRight={featherIcons.camera}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default FinalizarReposicao;
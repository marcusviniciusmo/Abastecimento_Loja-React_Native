import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import WarningSwitch from '../../Components/WarningSwitch';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';

const ReposicaoDaLinha: React.FC = () => {
    const textWarning = 'Urgente';

    const [enderecoInput, setEnderecoInput] = useState('');
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const getValueSwitch = () => {
        return isSwitchOn;
    };

    const changeValueSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
    };

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.reposicaoDaLinha}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='endereco'
                    icon={featherIcons.home}
                    placeholder={placeholder.endereco}
                    onChangeText={setEnderecoInput}
                    bordered
                />
                <WarningSwitch
                    textWarning={textWarning}
                    getValueSwitch={getValueSwitch}
                    changeValueSwitch={changeValueSwitch}
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ReposicaoDaLinha;
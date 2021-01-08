import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import WarningSwitch from '../../Components/WarningSwitch';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';
import ButtonConfirm from '../../Components/ButtonConfirm';

const ReposicaoDaLinha: React.FC<NavigationProps> = ({ navigation }) => {
    const textWarning = 'Urgente';

    const [enderecoInput, setEnderecoInput] = useState('');
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const getValueSwitch = () => {
        return isSwitchOn;
    };

    const changeValueSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
    };

    const cleanInputValue = ((input: any) => {
        input('');
        setIsSwitchOn(false);
    });

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.reposicaoDaLinha}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <Container>
                <Input
                    name='endereco'
                    icon={featherIcons.home}
                    placeholder={placeholder.endereco}
                    onChangeText={setEnderecoInput}
                    iconRight={enderecoInput ? featherIcons.x : ''}
                    cleanInput={cleanInputValue.bind(this, setEnderecoInput)}
                    value={enderecoInput}
                    bordered
                />
                <WarningSwitch
                    textWarning={textWarning}
                    getValueSwitch={getValueSwitch}
                    changeValueSwitch={changeValueSwitch}
                />
            </Container>
            {
                (enderecoInput !== '' && isSwitchOn)
                    ? <ButtonConfirm>Finalizar</ButtonConfirm>
                    : <TipBottomView text={tipText.informe_Todos_Campos}/>
            }
        </ContainerPrincipal>
    )
};

export default ReposicaoDaLinha;
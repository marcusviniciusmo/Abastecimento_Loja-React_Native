import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import WarningSwitch from '../../Components/WarningSwitch';
import Button from '../../Components/Button';
import { iconBack, settingsIcon, title, featherIcons, tipText, placeholder } from '../../Utils';

const AbrirCaminhao: React.FC = () => {
    const warningTextOff = 'Deseja reabrir o caminhão?'
    const warningTextOn = 'Sim, desejo reabrir o caminhão.'

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const getValuewSwitch = () => {
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
                title={title.abrirCaminhao}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name="placa-veiculo"
                    icon={featherIcons.truck}
                    placeholder={placeholder.placaVeiculo}
                    onChangeText={setPlacaVeiculoInput}
                    iconRight={placaVeiculoInput ? featherIcons.x : ''}
                    cleanInput={cleanInputValue.bind(this, setPlacaVeiculoInput)}
                    value={placaVeiculoInput}
                    bordered
                />
                <WarningSwitch
                    textWarning={getValuewSwitch() ? warningTextOn : warningTextOff}
                    getValueSwitch={getValuewSwitch}
                    changeValueSwitch={changeValueSwitch}
                />
            </Container>
            {
                (placaVeiculoInput !== '' && isSwitchOn)
                ? <Button>Gravar</Button>
                : <TipBottomView text={tipText.informe_Placa} />
            }
        </ContainerPrincipal>
    )
};

export default AbrirCaminhao;
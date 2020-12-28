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
                    bordered
                />
                <WarningSwitch
                    textOff={warningTextOff}
                    textOn={warningTextOn}
                />
            </Container>
            {
                !placaVeiculoInput ? 
                    <TipBottomView text={tipText.informe_Placa} />
                : 
                <Button
                    buttonConfirm
                >
                    Gravar
                </Button>
            }
        </ContainerPrincipal>
    )
};

export default AbrirCaminhao;
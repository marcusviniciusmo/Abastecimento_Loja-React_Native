import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import WarningSwitch from '../../Components/WarningSwitch';
import Button from '../../Components/Button';
import { iconBack, settingsIcon, title, featherIcons, tipText, placeholder, titleAlertModal, textButtonAlert } from '../../Utils';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';

const AbrirCaminhao: React.FC = () => {
    const warningTextOff = 'Deseja reabrir o caminhão?'
    const warningTextOn = 'Sim, desejo reabrir o caminhão.'
    const alertText = 'Caminhão aberto com sucesso!'

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [showModal, setShowModal] = useState(false);

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

    const openModal = () => {
        setShowModal(true);
    };

    const getShowModal = () => {
        return showModal;
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const abrirCaminhao = () => {
        setIsSwitchOn(false);
        openModal();
    };

    return (
        <>
            {
                !getShowModal() ?
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
                        <>
                            {
                                placaVeiculoInput !== '' && isSwitchOn
                                    ? <Button onPress={() => abrirCaminhao()}>Gravar</Button>
                                    : <TipBottomView text={tipText.informe_Placa} />
                            }
                        </>
                    </ContainerPrincipal>
                    : <ModalAlertaConfirmacao
                        titleAlert={titleAlertModal.sucesso}
                        icon={featherIcons.checkCircle}
                        text={alertText}
                        buttonConfirm
                        textButton={textButtonAlert.certo}
                        closeModal={closeModal}
                    />
            }
        </>
    )
};

export default AbrirCaminhao;
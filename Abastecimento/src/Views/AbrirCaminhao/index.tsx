import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import WarningSwitch from '../../Components/WarningSwitch';
import ButtonConfirm from '../../Components/ButtonConfirm';
import { iconBack, settingsIcon, title, featherIcons, tipText, placeholder, titleAlertModal, alertText, textButtonAlert } from '../../Utils';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';
import { NavigationProps } from '../../pmenos-utils/types';

const AbrirCaminhao: React.FC<NavigationProps> = ({ navigation }) => {
    const warningTextOff = 'Deseja reabrir o caminhão?'
    const warningTextOn = 'Sim, desejo reabrir o caminhão.'

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

    const onHandlerModal = () => {
        setShowModal(!showModal);
    };

    const getShowModal = () => {
        return showModal;
    };

    const abrirCaminhao = () => {
        setPlacaVeiculoInput('');
        setIsSwitchOn(false);
        onHandlerModal();
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
                            goBack={() => navigation.goBack()}
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
                                    ? <ButtonConfirm onPress={abrirCaminhao}>Gravar</ButtonConfirm>
                                    : <TipBottomView text={tipText.informe_Placa} />
                            }
                        </>
                    </ContainerPrincipal>
                    : <ModalAlertaConfirmacao
                        titleAlert={titleAlertModal.sucesso}
                        icon={featherIcons.checkCircle}
                        text={alertText.caminhaoAbertoSuccess}
                        buttonConfirm
                        textButton={textButtonAlert.certo}
                        closeModal={onHandlerModal}
                    />
            }
        </>
    )
};

export default AbrirCaminhao;
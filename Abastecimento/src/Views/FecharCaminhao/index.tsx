import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import ButtonConfirm from '../../Components/ButtonConfirm';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText, titleAlertModal, alertText, textButtonAlert } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';

const FecharCaminhao: React.FC<NavigationProps> = ({ navigation }) => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [showModal, setShowModal] = useState(false);

    const cleanValueInput = ((input: any) => {
        input('');
    });

    const onHandlerModal = () => {
        setShowModal(!showModal);
    };

    const getShowModal = () => {
        return showModal;
    };

    const fecharCaminhao = () => {
        setPlacaVeiculoInput('');
        onHandlerModal();
    };

    return (
        <>
            {
                !getShowModal() ?
                <ContainerPrincipal>
                    <HeaderView
                        title={title.fecharCaminhao}
                        iconBack={iconBack}
                        settings={settingsIcon}
                        goBack={() => navigation.goBack()}
                    />
                    <Container>
                        <Input
                            name='placa-veiculo'
                            icon={featherIcons.truck}
                            placeholder={placeholder.placaVeiculo}
                            onChangeText={setPlacaVeiculoInput}
                            iconRight={placaVeiculoInput ? featherIcons.x : ''}
                            cleanInput={cleanValueInput.bind(this, setPlacaVeiculoInput)}
                            value={placaVeiculoInput}
                            bordered
                        />
                    </Container>
                    {
                        placaVeiculoInput
                            ? <ButtonConfirm onPress={fecharCaminhao}>Gravar</ButtonConfirm>
                            : <TipBottomView text={tipText.informe_Placa} />
                    }
                </ContainerPrincipal>
                : <ModalAlertaConfirmacao
                    titleAlert={titleAlertModal.sucesso}
                    icon={featherIcons.checkCircle}
                    text={alertText.caminhaoFechadoSuccess}
                    buttonConfirm
                    textButton={textButtonAlert.certo}
                    closeModal={onHandlerModal}
                />
            }
        </>
    )
};

export default FecharCaminhao;
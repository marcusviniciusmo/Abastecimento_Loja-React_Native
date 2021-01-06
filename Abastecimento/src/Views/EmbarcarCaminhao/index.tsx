import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import ButtonConfirm from '../../Components/ButtonConfirm';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText, titleAlertModal, alertText, textButtonAlert } from '../../Utils';

const EmbacarCaminhao: React.FC = () => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [manifestoCargaInput, setManifestoCargaInput] = useState('');
    const [showModal, setShowModal] = useState(false);

    const cleanValueInput = ((input: any) => {
        input('');
    });

    const onHandlerModal = () => {
        setShowModal(!showModal);
    };

    const getShowModal = () => {
        return showModal;
    }

    const embarcarCaminhao = () => {
        setPlacaVeiculoInput('');
        setManifestoCargaInput('');
        onHandlerModal();
    };

    return (
        <>
            {
                !getShowModal() ?
                <ContainerPrincipal>
                    <HeaderView
                        title={title.embarcarCaminhao}
                        iconBack={iconBack}
                        settings={settingsIcon}
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
                        <Input
                            name='manifesto-carga'
                            icon={featherIcons.hash}
                            iconRight={manifestoCargaInput ? featherIcons.x : featherIcons.camera}
                            placeholder={placeholder.manifestoCarga}
                            onChangeText={setManifestoCargaInput}
                            cleanInput={cleanValueInput.bind(this, setManifestoCargaInput)}
                            value={manifestoCargaInput}
                            bordered
                        />
                    </Container>
                    {
                        (placaVeiculoInput && manifestoCargaInput)
                            ? <ButtonConfirm onPress={embarcarCaminhao}>Gravar</ButtonConfirm>
                            : <TipBottomView text={tipText.informe_Todos_Campos} />
                    }
                </ContainerPrincipal>
                : <ModalAlertaConfirmacao
                    titleAlert={titleAlertModal.sucesso}
                    icon={featherIcons.checkCircle}
                    text={alertText.caminhaoEmbarcadoSuccess}
                    buttonConfirm
                    textButton={textButtonAlert.certo}
                    closeModal={onHandlerModal}
                />
            }
        </>
    )
};

export default EmbacarCaminhao;
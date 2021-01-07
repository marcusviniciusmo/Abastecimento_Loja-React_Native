import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText, titleAlertModal, alertText, textButtonAlert } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';
import ButtonConfirm from '../../Components/ButtonConfirm';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';

const ModificarPlaca: React.FC<NavigationProps> = ({ navigation }) => {
    const [placaAtualInput, setPlacaAtualInput] = useState('');
    const [novaPlacaInput, setNovaPlacaInput] = useState('');
    const [showModal, setShowModal] = useState(false);

    const cleanInputValue = ((input: any) => {
        input('');
    });

    const onHandlerModal = () => {
        setShowModal(!showModal);
    };

    const getShowModal = () => {
        return showModal;
    };

    const modificarPlaca = () => {
        setPlacaAtualInput('');
        setNovaPlacaInput('');
        onHandlerModal();
    };

    return (
        <>
            {
                !getShowModal() ?
                <ContainerPrincipal>
                    <HeaderView
                        title={title.modificarPlaca}
                        iconBack={iconBack}
                        settings={settingsIcon}
                        goBack={() => navigation.goBack()}
                    />
                    <Container>
                        <Input
                            name='placa-atual'
                            icon={featherIcons.hash}
                            placeholder={placeholder.placaAtual}
                            onChangeText={setPlacaAtualInput}
                            iconRight={placaAtualInput ? featherIcons.x : ''}
                            cleanInput={cleanInputValue.bind(this, setPlacaAtualInput)}
                            value={placaAtualInput}
                            bordered
                        />
                        <Input
                            name='nova-placa'
                            icon={featherIcons.hash}
                            placeholder={placeholder.novaPlaca}
                            onChangeText={setNovaPlacaInput}
                            iconRight={novaPlacaInput ? featherIcons.x : ''}
                            cleanInput={cleanInputValue.bind(this, setNovaPlacaInput)}
                            value={novaPlacaInput}
                            bordered
                        />
                    </Container>
                    {
                        (placaAtualInput && novaPlacaInput)
                            ? <ButtonConfirm onPress={modificarPlaca}>Gravar</ButtonConfirm>
                            : <TipBottomView text={tipText.informe_Todos_Campos} />
                    }
                </ContainerPrincipal>
                : <ModalAlertaConfirmacao
                    titleAlert={titleAlertModal.sucesso}
                    icon={featherIcons.checkCircle}
                    text={alertText.placaModificadaSuccess}
                    buttonConfirm
                    textButton={textButtonAlert.certo}
                    closeModal={onHandlerModal}
                />
            }
        </>
    )
};

export default ModificarPlaca;
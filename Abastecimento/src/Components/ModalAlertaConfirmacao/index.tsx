import React from 'react';
import { Container, Content, TypeAlert, IconAlert, ContainerMessage, TextMessage, ContainerButton, TextButton } from './styles';

interface ModalAlertaConfirmacaoProps {
    titleAlert: string;
    icon: string;
    text: string;
    buttonConfirm: boolean;
    textButton: string;
    closeModal: () => void;
}

const ModalAlertaConfirmacao: React.FC<ModalAlertaConfirmacaoProps> = ({
    titleAlert,
    icon,
    text,
    buttonConfirm,
    textButton,
    closeModal
}) => {

    const onHandlerModal = () => closeModal();

    return (
        <Container>
            <Content buttonConfirm={buttonConfirm}>
                <TypeAlert buttonConfirm={buttonConfirm}>{titleAlert}</TypeAlert>
                <IconAlert name={icon} size={85} color={buttonConfirm ? '#0054A6' : '#ED1C24'} />
                <ContainerMessage>
                    <TextMessage>{text}</TextMessage>
                </ContainerMessage>
                <ContainerButton buttonConfirm={buttonConfirm} onPress={onHandlerModal}>
                    <TextButton>{textButton}</TextButton>
                </ContainerButton>
            </Content>
        </Container>

    )
};

export default ModalAlertaConfirmacao;
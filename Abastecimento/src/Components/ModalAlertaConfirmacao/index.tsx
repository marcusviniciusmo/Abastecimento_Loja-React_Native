import React from 'react';
import { Container, Content, TypeAlert, IconAlert, TextMessage, ContainerButton, TextButton } from './styles';

interface ModalAlertaConfirmacaoProps {
    typeAlert: string;
    icon: string;
    text: string;
    buttonConfirm: boolean;
    textButton: string;
}

const ModalAlertaConfirmacao: React.FC<ModalAlertaConfirmacaoProps> = ({
    typeAlert,
    icon,
    text,
    buttonConfirm,
}) => {

    buttonConfirm = true;
    
    return (
        <Container>
            <Content buttonConfirm={buttonConfirm}>
                <TypeAlert buttonConfirm={buttonConfirm}>Atenção</TypeAlert>
                <IconAlert name={'alert-circle'} size={85} color={buttonConfirm ? '#0054A6' : '#ED1C24'} />
                <TextMessage>{`Você selecionou o Centro de Distribuição 3. Caso precise alterar, vá no menu de configurações.`}</TextMessage>
                <ContainerButton buttonConfirm={buttonConfirm}>
                    <TextButton>Certo</TextButton>
                </ContainerButton>
            </Content>
        </Container>

    )
};

export default ModalAlertaConfirmacao;
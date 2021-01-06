import React, { useEffect, useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import TagToInsert from '../../Components/TagToInsert';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText, titleAlertModal, alertText, textButtonAlert } from '../../Utils';
import ButtonConfirm from '../../Components/ButtonConfirm';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';

const MontarCaminhao: React.FC = () => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [numeroPedidoInput, setNumeroPedidoInput] = useState('');
    const [filialInput, setFilialInput] = useState('');
    const [inserirEtiquetaInput, setInserirEtiquetaInput] = useState('');
    const [showModal, setShowModal] = useState(false);

    const cleanValueInput = ((input: any) => {
        input('');
    });

    const getShowModal = () => {
        return showModal;
    };

    const onHandlerModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            {
                !getShowModal() ?
                <ContainerPrincipal>
                    <HeaderView
                        title={title.montarCaminhao}
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
                            name='numero-pedido'
                            icon={featherIcons.hash}
                            placeholder={placeholder.numeroPedido}
                            onChangeText={setNumeroPedidoInput}
                            iconRight={numeroPedidoInput ? featherIcons.x : ''}
                            cleanInput={cleanValueInput.bind(this, setNumeroPedidoInput)}
                            value={numeroPedidoInput}
                            bordered
                        />
                        <Input
                            name='filial'
                            icon={featherIcons.home}
                            placeholder={placeholder.filial}
                            onChangeText={setFilialInput}
                            iconRight={filialInput ? featherIcons.x : ''}
                            cleanInput={cleanValueInput.bind(this, setFilialInput)}
                            value={filialInput}
                            bordered
                        />
                        <Input
                            name='inserir-etiqueta'
                            icon={featherIcons.plus}
                            placeholder={placeholder.inserirEtiqueta}
                            onChangeText={setInserirEtiquetaInput}
                            iconRight={inserirEtiquetaInput ? featherIcons.x : ''}
                            cleanInput={cleanValueInput.bind(this, setInserirEtiquetaInput)}
                            value={inserirEtiquetaInput}
                            bordered
                        />
                        <TagToInsert />
                    </Container>
                    {
                        (placaVeiculoInput && numeroPedidoInput && filialInput && inserirEtiquetaInput)
                            ? <ButtonConfirm onPress={onHandlerModal}>Gravar</ButtonConfirm>
                            : <TipBottomView text={tipText.informe_Todos_Campos} />
                    }
                </ContainerPrincipal>
                : <ModalAlertaConfirmacao
                    titleAlert={titleAlertModal.sucesso}
                    icon={featherIcons.checkCircle}
                    text={alertText.caminhaoMontadoSuccess}
                    buttonConfirm
                    textButton={textButtonAlert.certo}
                    closeModal={onHandlerModal}
                />
            }
        </>
    )
};

export default MontarCaminhao;
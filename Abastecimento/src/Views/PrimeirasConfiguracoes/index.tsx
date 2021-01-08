import React, { useState } from 'react';
import { ContainerPrincipal, ResultadoButton, InitialCircle, TextCircle, TextExposed } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import BarView from '../../Components/BarView';
import TipBottomView from '../../Components/TipBottomView';
import { ICentrosDistribuicao } from '../../pmenos-utils/types';
import { title, featherIcons, tipText, titleAlertModal, textButtonAlert } from '../../Utils';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';
import ButtonConfirm from '../../Components/ButtonConfirm';
import { NavigationProps } from '../../pmenos-utils/types';

const PrimeiroAcesso: React.FC<NavigationProps> = ({ navigation }) => {
    const textBar = 'Centro de Distribuição';

    const [centrosDistribuicao, setCentrosDistribuicao] = useState<Array<ICentrosDistribuicao> | null>(null);
    const [centroDistribuicaoLoading, setcentroDistribuicaoLoading] = useState(true);
    const [centroDistribuicaoSelecionado, setCentroDistribuicaoSelecionado] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const alertText = `Você selecionou o Centro de Distribuição ${centroDistribuicaoSelecionado}. Caso precise alterar, vá no menu de configurações.`;

    const cds = [{
        idCD: 1,
        nomeFantasiaCD: 'CD01-FORTALEZA/CE'
    },
    {
        idCD: 2,
        nomeFantasiaCD: 'CD02-HIDROLANDIA/GO'
    },
    {
        idCD: 3,
        nomeFantasiaCD: 'CD03-JABOATAO/PE'
    },
    {
        idCD: 4,
        nomeFantasiaCD: 'CD04-SIMOES FILHO/BA'
    },
    {
        idCD: 5,
        nomeFantasiaCD: 'CD05-CONTAGEM/MG'
    }];

    const onHandlerModal = () => {
        setShowModal(!showModal);
    };

    const getShowModal = () => {
        return showModal;
    };

    const selecionarCD = (cd: any) => {

        if (cd !== centroDistribuicaoSelecionado) {
            setCentroDistribuicaoSelecionado(cd);
            onHandlerModal();
        } else {
            setCentroDistribuicaoSelecionado(0);
        };
    };

    const getCDSelected = () => {
        return centroDistribuicaoSelecionado;
    };

    const confirmarCDSelecionado = () => {
        if (centroDistribuicaoSelecionado > 0) {
            navigation.navigate('Menu');
        };
    };

    return (
        <>
            {
                !getShowModal() ?
                    <ContainerPrincipal>
                        <HeaderView title={title.primeirasConfiguracoes} />
                        <BarView
                            text={textBar}
                        />
                        <>
                            {
                                cds.map((cd) => {
                                    return (
                                        <ResultadoButton key={cd.idCD}
                                                onPress={() => selecionarCD(cd.idCD)}
                                                option={cd.idCD}
                                                Selected={getCDSelected()}>
                                            <InitialCircle option={cd.idCD} Selected={getCDSelected()}>
                                                <TextCircle option={cd.idCD} Selected={getCDSelected()}>{cd.idCD}</TextCircle>
                                            </InitialCircle>
                                            <TextExposed option={cd.idCD} Selected={getCDSelected()}>{cd.nomeFantasiaCD}</TextExposed>
                                        </ResultadoButton>
                                    )
                                })
                            }
                        </>
                        {
                            centroDistribuicaoSelecionado > 0
                            ? <ButtonConfirm onPress={confirmarCDSelecionado}>Prosseguir</ButtonConfirm>
                            : <TipBottomView text={tipText.selecione_Centro_Distribuicao} />
                        }
                    </ContainerPrincipal>
                    : <ModalAlertaConfirmacao
                            titleAlert={titleAlertModal.atencao}
                            icon={featherIcons.alertCircle}
                            text={alertText}
                            buttonConfirm
                            textButton={textButtonAlert.certo}
                            closeModal={onHandlerModal}
                    />
            }
        </>
    )
};

export default PrimeiroAcesso;
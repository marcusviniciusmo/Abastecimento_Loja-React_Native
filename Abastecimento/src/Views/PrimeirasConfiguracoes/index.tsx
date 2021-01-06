import React, { useState } from 'react';
import { ContainerPrincipal, CentroDistribuicaoButton, InitialCircle, TextCircle, TextExposed } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import BarView from '../../Components/BarView';
import TipBottomView from '../../Components/TipBottomView';
import { ICentrosDistribuicao } from '../../pmenos-utils/types';
import { title, featherIcons, tipText, titleAlertModal, textButtonAlert } from '../../Utils';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';
import Button from '../../Components/Button';

const PrimeiroAcesso: React.FC = () => {
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

    const openModal = () => {
        setShowModal(true);
    };

    const getShowModal = () => {
        return showModal;
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const selecionarCD = (cd: any) => {

        if (cd !== centroDistribuicaoSelecionado) {
            setCentroDistribuicaoSelecionado(cd);
            openModal();
        } else {
            setCentroDistribuicaoSelecionado(0);
        };
    };

    const getCDSelected = () => {
        return centroDistribuicaoSelecionado;
    }

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
                                        <CentroDistribuicaoButton key={cd.idCD}
                                                onPress={() => selecionarCD(cd.idCD)}
                                                cd={cd.idCD}
                                                cdSelected={getCDSelected()}>
                                            <InitialCircle cd={cd.idCD} cdSelected={getCDSelected()}>
                                                <TextCircle cd={cd.idCD} cdSelected={getCDSelected()}>{cd.idCD}</TextCircle>
                                            </InitialCircle>
                                            <TextExposed cd={cd.idCD} cdSelected={getCDSelected()}>{cd.nomeFantasiaCD}</TextExposed>
                                        </CentroDistribuicaoButton>
                                    )
                                })
                            }
                        </>
                        {
                            centroDistribuicaoSelecionado > 0
                            ? <Button>Prosseguir</Button>
                            : <TipBottomView text={tipText.selecione_Centro_Distribuicao} />
                        }
                    </ContainerPrincipal>
                    : <ModalAlertaConfirmacao
                            titleAlert={titleAlertModal.atencao}
                            icon={featherIcons.alertCircle}
                            text={alertText}
                            buttonConfirm
                            textButton={textButtonAlert.certo}
                            closeModal={closeModal}
                    />
            }
        </>
    )
};

export default PrimeiroAcesso;
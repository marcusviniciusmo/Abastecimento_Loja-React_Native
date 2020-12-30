import React, { useState } from 'react';
import { ContainerPrincipal, CentroDistribuicaoButton, InitialCircle, TextCircle, TextExposed } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import BarView from '../../Components/BarView';
import TipBottomView from '../../Components/TipBottomView';
import { ICentrosDistribuicao } from '../../pmenos-utils/types';
import { title, tipText } from '../../Utils';
import ModalAlertaConfirmacao from '../../Components/ModalAlertaConfirmacao';

const PrimeiroAcesso: React.FC = () => {
    const textBar = 'Centro de Distribuição';

    const [centrosDistribuicao, setCentrosDistribuicao] = useState<Array<ICentrosDistribuicao> | null>(null);
    const [centroDistribuicaoLoading, setcentroDistribuicaoLoading] = useState(true);
    const [centroDistribuicaoSelecionado, setCentroDistribuicaoSelecionado] = useState('');
    const [showModal, setShowModal] = useState(false);

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

    const openModal = (cd: any) => {
        setCentroDistribuicaoSelecionado(cd)
        setShowModal(true);
    };

    const getShowModal = () => {
        return showModal;
    };

    const closeModal = () => {
        setShowModal(false);
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
                                        <CentroDistribuicaoButton key={cd.idCD} onPress={() => openModal(cd.idCD)}>
                                            <InitialCircle>
                                                <TextCircle>{cd.idCD}</TextCircle>
                                            </InitialCircle>
                                            <TextExposed>{cd.nomeFantasiaCD}</TextExposed>
                                        </CentroDistribuicaoButton>
                                    )
                                })
                            }
                        </>
                        <TipBottomView text={tipText.selecione_Centro_Distribuicao} />
                    </ContainerPrincipal>
                    : <ModalAlertaConfirmacao
                            titleAlert='Atenção'
                            icon='alert-circle'
                            text={`Você selecionou o Centro de Distribuição ${centroDistribuicaoSelecionado}. Caso precise alterar, vá no menu de configurações.`}
                            buttonConfirm
                            textButton='Certo'
                            closeModal={closeModal}
                    />
            }
        </>
    )
};

export default PrimeiroAcesso;
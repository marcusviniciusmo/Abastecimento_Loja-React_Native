import React, { useState } from 'react';
import { ContainerPrincipal, CentroDistribuicaoButton, InitialCircle, TextCircle, TextExposed } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import BarView from '../../Components/BarView';
import TipBottomView from '../../Components/TipBottomView';
import { ICentrosDistribuicao } from '../../pmenos-utils/types';
import { title, tipText } from '../../Utils';

const PrimeiroAcesso: React.FC = () => {
    const textBar = 'Centro de Distribuição';

    const [centrosDistribuicao, setCentrosDistribuicao] = useState<Array<ICentrosDistribuicao> | null>(null);
    const [centroDistribuicaoLoading, setcentroDistribuicaoLoading] = useState(true);
    const [centroDistribuicaoSelecionado, setcentroDistribuicaoSelecionado] = useState('');

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

    return (
        <ContainerPrincipal>
            <HeaderView title={title.primeirasConfiguracoes} />
            <BarView
                text={textBar}
            />
            <>
                {
                    cds.map((cd) => {
                        return (
                            <CentroDistribuicaoButton key={cd.idCD}>
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
    )
};

export default PrimeiroAcesso;
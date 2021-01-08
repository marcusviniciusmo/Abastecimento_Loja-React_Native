import React from 'react';
import { ContainerPrincipal, InitialCircle, TextCircle, TextExposed } from '../../AppStyles';
import BarView from '../../Components/BarView';
import HeaderView from '../../Components/HeaderView';
import { NavigationProps } from '../../pmenos-utils/types';
import { featherIcons, iconBack, settingsIcon } from '../../Utils';
import { ResultadoButton } from '../../AppStyles';
import Icon from 'react-native-vector-icons/Feather';

const ResultadosConsultarCaminhao: React.FC<NavigationProps> = ({ navigation, route }) => {

    const caminhoes = [{
        id: 1,
        status: 'Abertura',
        matricula: 17638,
        usuario: 'JEVERSON ANDRE DA CUNHA',
    },
    {
        id: 2,
        status: 'Fechamento',
        matricula: 17638,
        usuario: 'JEVERSON ANDRE DA CUNHA',
    },
    {
        id: 3,
        status: 'Embarque',
        matricula: 17638,
        usuario: 'JEVERSON ANDRE DA CUNHA',
    }]

    return (
        <ContainerPrincipal>
            <HeaderView
                title={(route.params).toString().toUpperCase()}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <BarView text={'Informações'} />
            <>
                {
                    caminhoes.map((c) => {
                        return (
                            <ResultadoButton key={c.id}
                                option={c.id}>
                                <InitialCircle option={c.id}>
                                    <TextCircle>{<Icon name={featherIcons.truck} size={20} color={'#ccc'} />}</TextCircle>
                                </InitialCircle>
                                <TextExposed option={c.id}>{c.status}</TextExposed>
                                <TextExposed option={c.id}>{`${c.matricula} - ${c.usuario}`}</TextExposed>
                            </ResultadoButton>
                        )
                    })
                }
            </>
        </ContainerPrincipal>
    )
};

export default ResultadosConsultarCaminhao;
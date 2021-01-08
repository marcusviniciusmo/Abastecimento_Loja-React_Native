import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ContainerPrincipal, InitialCircle, ResultadoButton, TextCircle } from '../../AppStyles';
import BarView from '../../Components/BarView';
import HeaderView from '../../Components/HeaderView';
import { featherIcons, iconBack, settingsIcon } from '../../Utils';

const ResultadosFiliaisNaoEmbarcadas: React.FC = ({ navigation, route}) => {

    const filiais = [{
        id: 1,
    },
    {
        id: 2,
    }]

    return (
        <ContainerPrincipal>
            <HeaderView
                title={`Pedido ${route.params}`}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <BarView text={'Filiais não embarcadas'}/>
            <>
                {
                    filiais.map((f) => {
                        return (
                            <ResultadoButton key={f.id}
                                option={f.id}>
                                <InitialCircle option={f.id}>
                                    <TextCircle>{<Icon name={featherIcons.home} size={20} color={'#ccc'} />}</TextCircle>
                                </InitialCircle>
                            </ResultadoButton>
                        )
                    })
                }
            </>
        </ContainerPrincipal>
    )
};

export default ResultadosFiliaisNaoEmbarcadas;
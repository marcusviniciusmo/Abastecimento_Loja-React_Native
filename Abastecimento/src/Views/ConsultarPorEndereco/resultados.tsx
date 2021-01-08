import React from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import { NavigationProps } from '../../pmenos-utils/types';
import { iconBack, settingsIcon } from '../../Utils';

const ResultadosConsultarPorEndereco: React.FC<NavigationProps> = ({ navigation }) => {
    return (
        <ContainerPrincipal>
            <HeaderView
                title={''}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
        </ContainerPrincipal>
    )
};

export default ResultadosConsultarPorEndereco;
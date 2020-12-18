import React, { useState } from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import { ContainerFavoritos, ContainerAplicativos } from './styles';
import BarView from '../../Components/BarView';
import OptionsMenu from '../../Components/OptionsMenu';
import {
    OptionsExpedicao,
    OptionsReposicao,
    OptionsEntradaDeMercadoria,
    OptionsDescarregamento,
    OptionsArmazenamento,
    OptionsConfiguracoes
} from '../../Components/OptionsMenu/options';

const Menu: React.FC = () => {
    const titleHeader = 'Menu';
    const textBarFavoritos = 'Favoritos';
    const textBarApps = 'Aplicativos';

    return (
        <ContainerPrincipal>
            <HeaderView title={titleHeader} />
            <ContainerFavoritos>
            <BarView text={textBarFavoritos} />
                <OptionsMenu text={'Abrir Caminhão'} />
                <OptionsMenu text={'Consultar Caminhão'} />
                <OptionsMenu text={'Escolher Favorito'} favoritos={true} />
            </ContainerFavoritos>
            <ContainerAplicativos>
                <BarView text={textBarApps} />
                <OptionsMenu
                    icon={'external-link'}
                    text={'Expedição'}
                    showButton={true}
                    options={OptionsExpedicao}
                />
                <OptionsMenu
                    icon={'archive'}
                    text={'Reposição'}
                    showButton={true}
                    options={OptionsReposicao}
                />
                <OptionsMenu
                    icon={'truck'}
                    text={'Entrada de Mercadorias'}
                    showButton={true}
                    options={OptionsEntradaDeMercadoria}
                />
                <OptionsMenu
                    icon={'upload'}
                    text={'Descarregamento'}
                    showButton={true}
                    options={OptionsDescarregamento}
                />
                <OptionsMenu
                    icon={'airplay'}
                    text={'Armazenamento'}
                    showButton={true}
                    options={OptionsArmazenamento}
                />
                <OptionsMenu
                    icon={'settings'}
                    text={'Configurações'}
                    showButton={true}
                    options={OptionsConfiguracoes}
                />
            </ContainerAplicativos>
        </ContainerPrincipal>
    )
};

export default Menu;
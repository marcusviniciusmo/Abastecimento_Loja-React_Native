import React, { useState } from 'react';
import HeaderView from '../../Components/HeaderView';
import { Container, ContainerFavoritos, ContainerAplicativos } from './styles';
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
import { title, featherIcons } from '../../Utils';
import { NavigationProps, SubOptionsMenuProps } from '../../pmenos-utils/types';

const Menu: React.FC<NavigationProps> = ({ navigation }) => {
    const textBarFavoritos = 'Favoritos';
    const textBarApps = 'Aplicativos';

    const favoritos: Array<SubOptionsMenuProps> = [{
        idOptions: 1,
        descricaoOptions: 'Abrir caminhão',
        categoriaMenu: 'Expedição',
        route: 'AbrirCaminhao',
    },
    {
        idOptions: 6,
        descricaoOptions: 'Consultar caminhão',
        categoriaMenu: 'Expedição',
        route: 'ConsultarCaminhao',
    }];

    return (
        <Container>
            <HeaderView title={title.menu} />
            <ContainerFavoritos>
            <BarView text={textBarFavoritos} />
                <OptionsMenu text={favoritos[0].descricaoOptions} />
                <OptionsMenu text={favoritos[1].descricaoOptions} />
                <OptionsMenu text={'Escolher Favorito'} isFavorito={true} />
            </ContainerFavoritos>
            <ContainerAplicativos>
                <BarView text={textBarApps} />
                <OptionsMenu
                    icon={featherIcons.external_link}
                    text={'Expedição'}
                    showButton={true}
                    options={OptionsExpedicao}
                    navigation={navigation}
                />
                <OptionsMenu
                    icon={featherIcons.archive}
                    text={'Reposição'}
                    showButton={true}
                    options={OptionsReposicao}
                    navigation={navigation}
                />
                <OptionsMenu
                    icon={featherIcons.truck}
                    text={'Entrada de Mercadorias'}
                    showButton={true}
                    options={OptionsEntradaDeMercadoria}
                    navigation={navigation}
                />
                <OptionsMenu
                    icon={featherIcons.upload}
                    text={'Descarregamento'}
                    showButton={true}
                    options={OptionsDescarregamento}
                    navigation={navigation}
                />
                <OptionsMenu
                    icon={featherIcons.airplay}
                    text={'Armazenamento'}
                    showButton={true}
                    options={OptionsArmazenamento}
                    navigation={navigation}
                />
                <OptionsMenu
                    icon={featherIcons.settings}
                    text={'Configurações'}
                    showButton={true}
                    options={OptionsConfiguracoes}
                    navigation={navigation}
                />
            </ContainerAplicativos>
        </Container>
    )
};

export default Menu;
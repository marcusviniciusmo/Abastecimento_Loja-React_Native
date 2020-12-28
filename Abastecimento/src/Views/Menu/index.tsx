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

const Menu: React.FC = () => {
    const textBarFavoritos = 'Favoritos';
    const textBarApps = 'Aplicativos';

    const favoritos = [{
        idOptions: 1,
        descricaoOptions: 'Abrir caminhão',
        categoriaMenu: 'Expedição'
    },
    {
        idOptions: 6,
        descricaoOptions: 'Consultar caminhão',
        categoriaMenu: 'Expedição'
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
                />
                <OptionsMenu
                    icon={featherIcons.archive}
                    text={'Reposição'}
                    showButton={true}
                    options={OptionsReposicao}
                />
                <OptionsMenu
                    icon={featherIcons.truck}
                    text={'Entrada de Mercadorias'}
                    showButton={true}
                    options={OptionsEntradaDeMercadoria}
                />
                <OptionsMenu
                    icon={featherIcons.upload}
                    text={'Descarregamento'}
                    showButton={true}
                    options={OptionsDescarregamento}
                />
                <OptionsMenu
                    icon={featherIcons.airplay}
                    text={'Armazenamento'}
                    showButton={true}
                    options={OptionsArmazenamento}
                />
                <OptionsMenu
                    icon={featherIcons.settings}
                    text={'Configurações'}
                    showButton={true}
                    options={OptionsConfiguracoes}
                />
            </ContainerAplicativos>
        </Container>
    )
};

export default Menu;
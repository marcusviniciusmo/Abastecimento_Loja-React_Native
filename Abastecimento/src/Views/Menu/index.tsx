import React from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import { ContainerFavoritos, ContainerAplicativos } from './styles';
import HeaderView from '../../Components/HeaderView';
import BarView from '../../Components/BarView';
import OptionsMenu from '../../Components/OptionsMenu';

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
                <OptionsMenu text={'Escolher favorito'} />
            </ContainerFavoritos>
            <ContainerAplicativos>
                <BarView text={textBarApps} />
                <OptionsMenu
                    icon={'external-link'}
                    text={'Expedição'}
                    showButton={true}
                />
                <OptionsMenu
                    icon={'archive'}
                    text={'Reposição'}
                    showButton={true}
                />
                <OptionsMenu
                    icon={'truck'}
                    text={'Entrada de Mercadorias'}
                    showButton={true}
                />
                <OptionsMenu
                    icon={'upload'}
                    text={'Descarregamento'}
                    showButton={true}
                />
                <OptionsMenu
                    icon={'airplay'}
                    text={'Armazenamento'}
                    showButton={true}
                />
                <OptionsMenu
                    icon={'settings'}
                    text={'Configurações'}
                    showButton={true}
                />
            </ContainerAplicativos>
        </ContainerPrincipal>
    )
};

export default Menu;
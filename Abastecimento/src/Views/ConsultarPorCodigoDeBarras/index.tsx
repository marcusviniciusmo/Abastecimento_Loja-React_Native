import React from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import { iconBack, settingsIcon } from '../../Utils';

const ConsultarPorCodigoDeBarras: React.FC = () => {
    const headerView = 'Consultar por Código de Barras'

    return (
        <ContainerPrincipal>
            <HeaderView
                title={headerView}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>

            </Container>
        </ContainerPrincipal>
    )
};

export default ConsultarPorCodigoDeBarras;
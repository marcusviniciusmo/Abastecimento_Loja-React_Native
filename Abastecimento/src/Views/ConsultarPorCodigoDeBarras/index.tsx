import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, sizeDefaultInput, heightDefaultInput } from '../../Utils';

const ConsultarPorCodigoDeBarras: React.FC = () => {
    const headerView = 'Consultar por Código de Barras';
    const tipText = 'Informe todos os campos para continuar';
    
    const[codigoDeBarras, setCodigoDeBarras] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={headerView}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='codigo-barras'
                    icon='bar-chart-2'
                    iconRight='camera'
                    placeholder={'Código de Barras'}
                    onChangeText={setCodigoDeBarras}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText}/>
        </ContainerPrincipal>
    )
};

export default ConsultarPorCodigoDeBarras;
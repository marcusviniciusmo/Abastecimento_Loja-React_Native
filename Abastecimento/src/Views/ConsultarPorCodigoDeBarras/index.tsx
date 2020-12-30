import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';

const ConsultarPorCodigoDeBarras: React.FC = () => {    
    const[codigoDeBarrasInput, setCodigoDeBarrasInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.consultarPorCodigoDeBarras}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='codigo-barras'
                    icon={featherIcons.barChart}
                    iconRight={featherIcons.camera}
                    placeholder={placeholder.codigoBarras}
                    onChangeText={setCodigoDeBarrasInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ConsultarPorCodigoDeBarras;
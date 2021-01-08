import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';
import ButtonConfirm from '../../Components/ButtonConfirm';

const ConsultarPorCodigoDeBarras: React.FC<NavigationProps> = ({ navigation }) => {    
    const[codigoDeBarrasInput, setCodigoDeBarrasInput] = useState('');

    const cleanInputValue = ((input: any) => {
        input('');
    });

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.consultarPorCodigoDeBarras}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <Container>
                <Input
                    name='codigo-barras'
                    icon={featherIcons.barChart}
                    iconRight={codigoDeBarrasInput ? featherIcons.x : featherIcons.camera}
                    placeholder={placeholder.codigoBarras}
                    onChangeText={setCodigoDeBarrasInput}
                    cleanInput={cleanInputValue.bind(this, setCodigoDeBarrasInput)}
                    value={codigoDeBarrasInput}
                    bordered
                />
            </Container>
            {
                codigoDeBarrasInput
                    ? <ButtonConfirm>Buscar</ButtonConfirm>
                    : <TipBottomView text={tipText.informe_Todos_Campos}/>
            }
        </ContainerPrincipal>
    )
};

export default ConsultarPorCodigoDeBarras;
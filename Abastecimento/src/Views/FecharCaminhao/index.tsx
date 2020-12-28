import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';

const FecharCaminhao: React.FC = () => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.fecharCaminhao}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
            <Input
                name='placa-veiculo'
                icon={featherIcons.truck}
                placeholder={placeholder.placaVeiculo}
                onChangeText={setPlacaVeiculoInput}
                bordered
            />
            </Container>
            <TipBottomView text={tipText.informe_Placa} />
        </ContainerPrincipal>
    )
};

export default FecharCaminhao;
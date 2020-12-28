import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText } from '../../Utils';

const EmbacarCaminhao: React.FC = () => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [manifestoCarga, setManifestoCarga] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                    title={title.embarcarCaminhao}
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
                <Input
                    name='manifesto-carga'
                    icon={featherIcons.hash}
                    iconRight={featherIcons.camera}
                    placeholder={placeholder.manifestoCarga}
                    onChangeText={setManifestoCarga}
                    bordered
                />
            </Container>
            <TipBottomView 
                text={tipText.informe_Todos_Campos}
            />
        </ContainerPrincipal>
    )
};

export default EmbacarCaminhao;
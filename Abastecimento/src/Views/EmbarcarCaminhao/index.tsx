import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { sizeDefaultInput, heightDefaultInput, iconBack, settingsIcon } from '../../Utils';

const EmbacarCaminhao: React.FC = () => {
    const headerText = 'Embarcar Caminhão';
    const tipText = 'Informe todos os campos para continuar'

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [manifestoCarga, setManifestoCarga] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                    title={headerText}
                    iconBack={iconBack}
                    settings={settingsIcon}
                />
            <Container>
                <Input
                    name='placa-veiculo'
                    icon='truck'
                    placeholder={'Placa do veículo'}
                    onChangeText={setPlacaVeiculoInput}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <Input
                    name='manifesto-carga'
                    icon='hash'
                    iconRight='camera'
                    placeholder={'Manifesto da Carga'}
                    onChangeText={setManifestoCarga}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
            </Container>
            <TipBottomView 
                text={tipText}
            />
        </ContainerPrincipal>
    )
};

export default EmbacarCaminhao;
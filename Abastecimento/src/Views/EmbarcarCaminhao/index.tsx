import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';

const EmbacarCaminhao: React.FC = () => {
    const headerText = 'Embarcar Caminhão';
    const tipText = 'Informe todos os campos para continuar'
    const size = 25;
    const height = 60;

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [manifestoCarga, setManifestoCarga] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                    title={headerText}
                    iconBack='arrow-left'
                    settings='more-vertical'
                />
            <Container>
                <Input
                    name='placa-veiculo'
                    icon='truck'
                    placeholder={'Placa do veículo'}
                    onChangeText={setPlacaVeiculoInput}
                    size={size}
                    height={height}
                    bordered
                />
                <Input
                    name='manifesto-carga'
                    icon='hash'
                    iconRight='camera'
                    placeholder={'Manifesto da Carga'}
                    onChangeText={setManifestoCarga}
                    size={size}
                    height={height}
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
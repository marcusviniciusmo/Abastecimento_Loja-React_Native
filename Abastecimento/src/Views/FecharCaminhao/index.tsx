import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { sizeDefaultInput, heightDefaultInput, iconBack, settingsIcon } from '../../Utils';

const FecharCaminhao: React.FC = () => {
    const headerText = 'Fechar Caminhão';
    const tipText = 'Informe a Placa do Veículo para continuar';

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');

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
            </Container>
            <TipBottomView text={tipText} />
        </ContainerPrincipal>
    )
};

export default FecharCaminhao;
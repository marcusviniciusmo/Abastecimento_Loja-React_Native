import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { sizeDefaultInput, heightDefaultInput } from '../../Utils';

const ConsultarCaminhao: React.FC = () => {
    const headerText = 'Consultar Caminhão';
    const tipText = 'Informe todos os campos para continuar';

    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');

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
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText}/>
        </ContainerPrincipal>
    )
};

export default ConsultarCaminhao;
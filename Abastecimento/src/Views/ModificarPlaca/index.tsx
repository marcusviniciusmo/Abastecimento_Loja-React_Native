import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { sizeDefaultInput, heightDefaultInput } from '../../Utils';

const ModificarPlaca: React.FC = () => {
    const headerText = 'Modificar Placa';
    const tipText = 'Informe todos os campos para continuar';

    const [placaAtual, setPlacaAtual] = useState('');
    const [novaPlaca, setNovaPlaca] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={headerText}
                iconBack='arrow-left'
                settings='more-vertical'
            />
            <Container>
                <Input
                    name='placa-atual'
                    icon='hash'
                    placeholder={'Placa atual'}
                    onChangeText={setPlacaAtual}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
                <Input
                    name='nova-placa'
                    icon='hash'
                    placeholder={'Nova placa'}
                    onChangeText={setNovaPlaca}
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

export default ModificarPlaca;
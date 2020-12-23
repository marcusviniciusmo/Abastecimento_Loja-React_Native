import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { sizeDefaultInput, heightDefaultInput } from '../../Utils';

const FiliaisNaoEmbarcadas: React.FC = () => {
    const headerText = 'Filiais Não Embarcadas';
    const tipText = 'Informe todos os campos para continuar';

    const [numeroPedidoInput, setNumeroPedidoInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={headerText}
                iconBack='arrow-left'
                settings='more-vertical'
            />
            <Container>
                <Input
                    name='numero-pedido'
                    icon='hash'
                    placeholder={'Número do pedido'}
                    onChangeText={setNumeroPedidoInput}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText} />
        </ContainerPrincipal>
    )
};

export default FiliaisNaoEmbarcadas;
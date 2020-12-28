import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, sizeDefaultInput, heightDefaultInput } from '../../Utils';

const ConsultarPorEndereco: React.FC = () => {
    const headerText = 'Consultar por Endereço';
    const tipText = 'Informe todos os campos para continuar';

    const [endereco, setEndereco] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={headerText}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='endereco'
                    icon='home'
                    placeholder={'Endereço'}
                    onChangeText={setEndereco}
                    size={sizeDefaultInput}
                    height={heightDefaultInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText}/>
        </ContainerPrincipal>
    )
};

export default ConsultarPorEndereco;
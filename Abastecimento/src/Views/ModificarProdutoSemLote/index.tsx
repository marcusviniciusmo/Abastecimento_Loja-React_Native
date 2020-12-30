import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';

const ModificarProdutoSemLote: React.FC = () => {
    const [identicadorConferenciaInput, setIdenticadorConferenciaInput] = useState('');
    const [sequencialNotaInput, setSequencialNotaInput] = useState('');
    const [codigoDeBarrasInput, setCodigoDeBarrasInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.modificarProdutoSemLote}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='identificador-conferencia'
                    icon={featherIcons.hash}
                    placeholder={placeholder.identificadorConferencia}
                    onChangeText={setIdenticadorConferenciaInput}
                    bordered
                />
                <Input
                    name='sequencial-nota'
                    icon={featherIcons.hash}
                    placeholder={placeholder.sequencialNota}
                    onChangeText={setSequencialNotaInput}
                    bordered
                />
                <Input
                    name='codigo-barras'
                    icon={featherIcons.barChart}
                    iconRight={featherIcons.camera}
                    placeholder={placeholder.codigoBarras}
                    onChangeText={setCodigoDeBarrasInput}
                    bordered
                />
            </Container>
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default ModificarProdutoSemLote;
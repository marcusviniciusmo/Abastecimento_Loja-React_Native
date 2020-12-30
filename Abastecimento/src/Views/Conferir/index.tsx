import React, { useState } from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import { Container, ContainerCard, CardContent } from './styles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import { title, iconBack, settingsIcon, featherIcons, placeholder, tipText } from '../../Utils';
import TipBottomView from '../../Components/TipBottomView';
import BarView from '../../Components/BarView';
import Card from '../../Components/Card';

const Conferir: React.FC = () => {
    const [codigoDeBarrasInput, setCodigoDeBarrasInput] = useState('');

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.conferir}
                iconBack={iconBack}
                settings={settingsIcon}
            />
            <Container>
                <Input
                    name='codigo-barras'
                    icon={featherIcons.barChart}
                    iconRight={featherIcons.camera}
                    placeholder={placeholder.codigoBarras}
                    onChangeText={setCodigoDeBarrasInput}
                    bordered
                />
            </Container>
            <TipBottomView
                top={'23'}
                text={tipText.informe_Codigo_Barras}
                inputAlign
            />
            <ContainerCard>
                <CardContent>
                    <Card
                        icon={featherIcons.hash}
                        textCard={'Lote'}
                    />
                    <Card
                        icon={featherIcons.layers}
                        textCard={'Quantidade'}
                    />
                </CardContent>
                <CardContent>
                    <Card
                        icon={featherIcons.calendar}
                        textCard={'Fabricação'}
                    />
                    <Card
                        icon={featherIcons.calendar}
                        textCard={'Validade'}
                    />
                </CardContent>
            </ContainerCard>
            <BarView text={'Resultados'} />
            <TipBottomView text={tipText.informe_Todos_Campos}/>
        </ContainerPrincipal>
    )
};

export default Conferir;
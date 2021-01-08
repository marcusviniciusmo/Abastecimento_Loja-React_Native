import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText, routes } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';
import ButtonConfirm from '../../Components/ButtonConfirm';

const ConsultarCaminhao: React.FC<NavigationProps> = ({ navigation }) => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');

    const cleanInputValue = ((input: any) => {
        input('');
    });

    const mostrarResultados = () => {
        navigation.navigate(routes.resultadosConsultarCaminhao, placaVeiculoInput);
    };

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.consultarCaminhao}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <Container>
                <Input
                    name='placa-veiculo'
                    icon={featherIcons.truck}
                    placeholder={placeholder.placaVeiculo}
                    onChangeText={setPlacaVeiculoInput}
                    iconRight={placaVeiculoInput ? featherIcons.x : ''}
                    cleanInput={cleanInputValue.bind(this, setPlacaVeiculoInput)}
                    value={placaVeiculoInput}
                    bordered
                />
            </Container>
            {
                placaVeiculoInput
                    ? <ButtonConfirm onPress={mostrarResultados.bind(this)}>Consultar Caminhão</ButtonConfirm>
                    : <TipBottomView text={tipText.informe_Todos_Campos}/>
            }
        </ContainerPrincipal>
    )
};

export default ConsultarCaminhao;
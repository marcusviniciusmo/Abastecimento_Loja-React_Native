import React, { useState } from 'react';
import { ContainerPrincipal, Container } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText, routes } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';
import ButtonConfirm from '../../Components/ButtonConfirm';

const VolumesNaoEscaneados: React.FC<NavigationProps> = ({ navigation }) => {
    const [placaVeiculoInput, setPlacaVeiculoInput] = useState('');
    const [numeroPedidoInput, setNumeroPedidoInput] = useState('');
    const [filialInput, setFilialInput] = useState('');

    const cleanInputValue = ((input: any) => {
        input('');
    });

    const mostrarResultados = () => {
        const volumeNaoEscaneado = {
            placaVeiculoInput: placaVeiculoInput,
            numeroPedidoInput: numeroPedidoInput,
            filialInput: filialInput
        };

        navigation.navigate(routes.resultadosVolumesNaoEscaneados, volumeNaoEscaneado)
    }

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.volumesNaoEscaneados}
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
                <Input
                    name='numero-pedido'
                    icon={featherIcons.hash}
                    placeholder={placeholder.numeroPedido}
                    onChangeText={setNumeroPedidoInput}
                    keyboardType={'numeric'}
                    iconRight={numeroPedidoInput ? featherIcons.x : ''}
                    cleanInput={cleanInputValue.bind(this, setNumeroPedidoInput)}
                    value={numeroPedidoInput}
                    bordered
                />
                <Input
                    name='filial'
                    icon={featherIcons.home}
                    placeholder={placeholder.filial}
                    onChangeText={setFilialInput}
                    keyboardType={'numeric'}
                    iconRight={filialInput ? featherIcons.x : ''}
                    cleanInput={cleanInputValue.bind(this, setFilialInput)}
                    value={filialInput}
                    bordered
                />
            </Container>
            {
                (placaVeiculoInput && numeroPedidoInput && filialInput)
                    ? <ButtonConfirm onPress={mostrarResultados.bind(this)}>Buscar</ButtonConfirm>
                    : <TipBottomView text={tipText.informe_Todos_Campos} />
            }
        </ContainerPrincipal>
    )
};

export default VolumesNaoEscaneados;
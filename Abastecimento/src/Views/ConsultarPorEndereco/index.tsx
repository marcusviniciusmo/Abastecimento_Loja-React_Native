import React, { useState } from 'react';
import { Container, ContainerPrincipal } from '../../AppStyles';
import HeaderView from '../../Components/HeaderView';
import Input from '../../Components/Input';
import TipBottomView from '../../Components/TipBottomView';
import { iconBack, settingsIcon, title, featherIcons, placeholder, tipText, routes } from '../../Utils';
import { NavigationProps } from '../../pmenos-utils/types';
import ButtonConfirm from '../../Components/ButtonConfirm';

const ConsultarPorEndereco: React.FC<NavigationProps> = ({ navigation }) => {
    const [enderecoInput, setEnderecoInput] = useState('');

    const cleanInputValue = ((input: any) => {
        input('');
    });

    const mostrarResultados = () => {
        navigation.navigate(routes.resultadosConsultarPorEndereco)
    };

    return (
        <ContainerPrincipal>
            <HeaderView
                title={title.consultarPorEndereco}
                iconBack={iconBack}
                settings={settingsIcon}
                goBack={() => navigation.goBack()}
            />
            <Container>
                <Input
                    name='endereco'
                    icon={featherIcons.home}
                    placeholder={placeholder.endereco}
                    onChangeText={setEnderecoInput}
                    iconRight={enderecoInput ? featherIcons.x : ''}
                    cleanInput={cleanInputValue.bind(this, setEnderecoInput)}
                    value={enderecoInput}
                    bordered
                />
            </Container>
            {
                enderecoInput
                    ? <ButtonConfirm onPress={mostrarResultados}>Buscar</ButtonConfirm>
                    : <TipBottomView text={tipText.informe_Todos_Campos}/>
            }
        </ContainerPrincipal>
    )
};

export default ConsultarPorEndereco;
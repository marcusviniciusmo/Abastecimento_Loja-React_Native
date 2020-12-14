import React, { useState } from 'react';
import { Container, Logo, SubmitButton, Footer, TextFooter } from './styles';
import {SvgAst} from 'react-native-svg'

const Login = () => {
    const [singing, setSinging] = useState(false);

    return (
        <Container>
            <Logo source={require('../../assets/logo-pmenos.png')}/>
            <SvgAst source={'../../assets/questionary.svg'}/>
            <SubmitButton title="entrar">
                Entrar
            </SubmitButton>
            <Footer>
                <TextFooter>&copy; Copyright {new Date().getFullYear()}</TextFooter>
                <TextFooter>Empreendimentos Pague Menos</TextFooter>
            </Footer>
        </Container>
    )
};

export default Login;
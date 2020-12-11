import React, { useState } from 'react';
import { Container, Logo, SubmitButton, Footer, TextFooter } from './styles';

const Login = () => {
    const [singing, setSinging] = useState(false);

    return (
        <Container>
            <Logo source={require('../../assets/logo-pmenos.png')}/>
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
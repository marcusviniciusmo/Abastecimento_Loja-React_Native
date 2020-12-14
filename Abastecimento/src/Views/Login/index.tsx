import React, { useState } from 'react';
import { Container, Logo, Footer, TextFooter } from './styles';
import Input from '../../Components/Input';

const Login: React.FC = () => {
    const [userInput, setUserInput] = useState('');

    return (
        <Container>
            <Logo source={require('../../assets/logo-pmenos.png')} />
            <Input
                name="matricula"
                icon="user"
                placeholder={'Matricula'}
                bordered
            />
            <Input
                name="password"
                icon="lock"
                placeholder={'Senha'}
                bordered
            />
            <Footer>
                <TextFooter>&copy; Copyright {new Date().getFullYear()}</TextFooter>
                <TextFooter>Empreendimentos Pague Menos</TextFooter>
            </Footer>
        </Container>
    )
};

export default Login;
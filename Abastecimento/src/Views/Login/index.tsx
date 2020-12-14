import React, { useState } from 'react';
import { Container, Logo, Footer, TextFooter, SubmitButton } from './styles';
import Input from '../../Components/Input';

const Login: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [singing, setSinging] = useState('');

    const logar = () => {

    };

    return (
        <Container>
            <Logo source={require('../../assets/logo-pmenos.png')} />
            <Input
                name="matricula"
                icon="user"
                placeholder={'Matricula'}
                onChangeText={setUserInput}
                keyboardType={'numeric'}
                bordered
            />
            <Input
                name="password"
                icon="lock"
                placeholder={'Senha'}
                onChangeText={setPasswordInput}
                secureTextEntry={true}
                onSubmitEditing={logar}
                bordered
            />
            <SubmitButton isLoading={singing} onPress={logar}>
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
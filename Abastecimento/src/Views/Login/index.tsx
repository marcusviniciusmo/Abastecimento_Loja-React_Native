import React, { useState } from 'react';
import { ContainerPrincipal } from '../../AppStyles';
import { Container, ContainerInput, Logo, Footer, TextFooter, SubmitButton } from './styles';
import Input from '../../Components/Input';
import { Alert } from 'react-native';
import useAuthentication from '../../pmenos-utils/hooks/useAuthentication';

const Login: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [singing, setSinging] = useState(false);
    const { login } = useAuthentication();

    const logar = () => {
        if (!singing) {

            let erros = [];

            if (!userInput) {
                erros.push('Insira a sua matrícula!');
            }
            if (!passwordInput) {
                erros.push('Insira a sua senha!');
            }

            if (erros.length) {
                Alert.alert('Erro no login:', erros.join('\r\n'));
                return;
            }

            setSinging(true);
            login(userInput, passwordInput)
                .then(() => { })
                .catch((error) => {
                    console.log('!erro.login!')
                    console.log(error)
                    console.log('Erro no login:', 'Usuário ou senha inválidos.');
                })
                .finally(() => {
                    setSinging(false);
                });
        }
    };

    return (
        <ContainerPrincipal>
            <Container>
                <Logo source={require('../../assets/logo-pmenos.png')} />
                <ContainerInput>
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
                        autoCapitalize="none"
                        placeholder={'Senha'}
                        onChangeText={setPasswordInput}
                        secureTextEntry={true}
                        onSubmitEditing={logar}
                        bordered
                    />
                </ContainerInput>
                <SubmitButton isLoading={singing} onPress={logar}>
                    Entrar
                </SubmitButton>
                <Footer>
                    <TextFooter>Distribuição &copy; Copyright {new Date().getFullYear()}</TextFooter>
                    <TextFooter>Empreendimentos Pague Menos</TextFooter>
                </Footer>
            </Container>
        </ContainerPrincipal>
    )
};

export default Login;
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'

const confirmColor = '#0054A6';
const errorColor = '#ED1C24';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.3);
    position: absolute;
`;

export const Content = styled.View.attrs((buttonConfirm: boolean) => {
    buttonConfirm
})`
    background-color: #fff;
    width: 70%;
    height: 40%;
    top: 30%;
    left: 15%;
    border: 1px solid ${({ buttonConfirm }: any) => buttonConfirm ? confirmColor : errorColor};
    border-radius: 10px;
`;

export const TypeAlert = styled.Text.attrs((buttonConfirm: boolean) => {
    buttonConfirm
})`
    color: ${({ buttonConfirm }: any) => buttonConfirm ? confirmColor : errorColor};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
`;

export const IconAlert = styled(Icon)`
    align-self: center;
    padding: 10px;
    margin-top: 5px;
`;

export const ContainerMessage = styled.View`
    height: 23%;
    flex-direction: column;
    justify-content: flex-end;
`;

export const TextMessage = styled.Text`
    color: #000;
    font-size: 15px;
    text-align: center;
    width: 95%;
    left: 2.5%;
    justify-content: center;
    padding: 10px;
`;

export const ContainerButton = styled.TouchableOpacity.attrs((buttonConfirm: boolean) => {
    buttonConfirm
})`
    background-color: ${({ buttonConfirm }: any) => buttonConfirm ? confirmColor : errorColor};
    position: absolute;
    top: 81%;
    width: 100%;
    flex: 1;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 5px;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-size: 18px;
    text-align: center;
    padding: 15px;
`;
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.TouchableOpacity`
    background-color: #EBEBEB;
    width: 44%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const IconStyled = styled(Icon)`
    margin: 0 16px;
`;

export const TextCard = styled.Text`
    flex: 1;
    font-size: 15px;
    align-self: center;
    padding: 10px;
`;
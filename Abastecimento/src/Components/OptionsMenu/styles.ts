import { Icon } from 'react-native-vector-icons/Icon';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #0054A6;
    height: 50px;
    width: 85%;
    border-radius: 8px;
    align-self: center;
    margin: 3px 0;
`;

interface optionsShowProps {
    show: boolean;
}

export const OptionsStyled = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin : auto 12px;
    align-items: center;
`;

export const TextOptions = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 14px;
    flex: 1;
`;
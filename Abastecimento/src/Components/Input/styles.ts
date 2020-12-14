import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const borderRadius = '10px';

interface ContainerProps {
    bordered: boolean;
};

export const Container  = styled.View.attrs((props: ContainerProps) => {})`
    width: 100%;
    min-height: 60px;
    background-color: #fff;
    border: ${({ bordered }: ContainerProps) => 
        bordered ? 'solid 1px #ccc' : 'none'};
    border-radius: ${borderRadius};
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

export const IconStyled = styled(Icon)`
    margin: 0 16px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #333;
    font-size: 16px;
    padding: 20px 0;
`;

export const IconButton = styled.TouchableOpacity`
    padding: 17px 16px;
    border-radius: ${borderRadius};
    width: 60px;
    height: 60px;
`
import React from 'react';
import { Container, TextOptions, OptionsStyled } from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface OptionsMenuProps {
    text: string;
    icon?: string;
    showButton?: boolean;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({
    icon,
    text,
    showButton
}) => {
    return (
        <Container>
            <OptionsStyled>
                {
                    icon && 
                    <Icon name={icon} size={25} color={'#fff'}  />
                }
                <TextOptions>{text}</TextOptions>
                {
                    showButton &&
                    <Icon name={'chevron-down'} size={25} color={'#fff'} />
                }
            </OptionsStyled>
        </Container>
    )
};

export default OptionsMenu;
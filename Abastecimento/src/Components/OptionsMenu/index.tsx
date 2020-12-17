import React from 'react';
import { Container, TextOptions, OptionsStyled } from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface OptionsMenuProps {
    text: string;
    icon?: string;
    showButton?: boolean;
    favoritos?: boolean;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({
    icon,
    text,
    showButton,
    favoritos
}) => {
    return (
        <Container favoritos={favoritos}>
            <OptionsStyled>
                {
                    icon && 
                    <Icon name={icon} size={25} color={'#fff'} />
                }
                <TextOptions favoritos={favoritos}>{text}</TextOptions>
                {
                    showButton &&
                    <Icon name={'chevron-down'} size={25} color={'#fff'} />
                }
            </OptionsStyled>
        </Container>
    )
};

export default OptionsMenu;
import React from 'react';
import { Container, TextHeaderView, StyledContainer, ButtonBack } from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface HeaderViewProps {
    title: string;
    iconBack?: string;
    settings?: string;
}

const HeaderView: React.FC<HeaderViewProps> = ({
    title,
    iconBack,
    settings
}) => {
    return (
        <Container>
            <StyledContainer>
                <ButtonBack>
                    <Icon name={iconBack} size={35} color={'#fff'} />
                </ButtonBack>
                <TextHeaderView>{title}</TextHeaderView>
                <Icon name={settings} size={35} color={'#fff'} />
            </StyledContainer>
        </Container>
    )
}

export default HeaderView;
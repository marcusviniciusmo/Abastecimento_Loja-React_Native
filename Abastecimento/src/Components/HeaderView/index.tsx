import React from 'react';
import { Container, TextHeaderView, StyledContainer } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

interface HeaderViewProps {
    title: string;
    iconBack?: string;
    settings?: string;
    goBack?: () => void;
}

const HeaderView: React.FC<HeaderViewProps> = ({
    title,
    iconBack,
    settings,
    goBack
}) => {
    return (
        <Container>
            <StyledContainer>
                <TouchableOpacity onPress={() => goBack()}>
                    <Icon name={iconBack} size={35} color={'#fff'} />
                </TouchableOpacity>
                <TextHeaderView>{title}</TextHeaderView>
                <Icon name={settings} size={35} color={'#fff'} />
            </StyledContainer>
        </Container>
    )
}

export default HeaderView;
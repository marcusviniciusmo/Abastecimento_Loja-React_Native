import React from 'react';
import { Container, IconStyled, TextCard } from './styles';
import Icon from 'react-native-vector-icons/Feather';

interface CardProps {
    icon: string;
    textCard: string;
}

const Card: React.FC<CardProps> = ({
    icon,
    textCard
}) => {
    return (
        <Container>
            <IconStyled name={icon} size={20} color={'#666360'}/>
            <TextCard>{textCard}</TextCard>
        </Container>
    )
};

export default Card;
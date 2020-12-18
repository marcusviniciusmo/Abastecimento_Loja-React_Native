import React from 'react';
import { Container, TagText } from './styles';

const TagToInsert: React.FC = () => {
    const placeholderTag = 'Nenhuma etiqueta inserida.'

    return (
        <Container>
            <TagText>{placeholderTag}</TagText>
        </Container>
    )
};

export default TagToInsert;
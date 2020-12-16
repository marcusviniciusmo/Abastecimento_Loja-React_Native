import React from 'react';
import { Container, TextHeaderView } from './styles';

interface HeaderViewProps {
    title: string;
}

const HeaderView: React.FC<HeaderViewProps> = ({
    title
}) => {
    return (
        <Container>
            <TextHeaderView>{title}</TextHeaderView>
        </Container>
    )
}

export default HeaderView;
import React from 'react';
import { Container, BarText } from './styles';

interface BarViewProps {
    text: string
}

const BarView: React.FC<BarViewProps> = ({
    text
}) => {
    return (
        <Container>
            <BarText>{text}</BarText>
        </Container>
    )
};

export default BarView;
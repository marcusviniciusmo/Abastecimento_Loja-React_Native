import React from 'react';
import { Container, ContainerTip, TipText } from './styles';

interface TipoBottomViewProps {
    text: string;
}

const TipBottomView: React.FC<TipoBottomViewProps> = ({
    text
}) => {
    return (
        <Container>
            <ContainerTip>
                <TipText>{text}</TipText>
            </ContainerTip>
        </Container>
    )
};

export default TipBottomView;
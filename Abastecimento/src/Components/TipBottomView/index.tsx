import React from 'react';
import { Container, ContainerTip, TipText } from './styles';

interface TipoBottomViewProps {
    text: string;
    top?: string;
    inputAlign?: boolean;
}

const TipBottomView: React.FC<TipoBottomViewProps> = ({
    text,
    top,
    inputAlign
}) => {
    return (
        <Container top={top} inputAlign={inputAlign}>
            <ContainerTip length={text.length}>
                <TipText>{text}</TipText>
            </ContainerTip>
        </Container>
    )
};

export default TipBottomView;
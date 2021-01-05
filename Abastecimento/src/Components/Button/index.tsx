import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import {
    Container,
    TextContainer,
    ButtonText,
    Tag,
    TagText
} from './styles';

interface ButtonProps extends RectButtonProperties {
    children: string;
    small?: boolean;
    color?: boolean;
    width?: string;
    top?: string;
    align?: string;
    isLoading?: boolean;
    count?: boolean;
    isRightButton?: boolean;
    positionRelative?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    small,
    color,
    width,
    top,
    align,
    isLoading,
    count,
    isRightButton,
    positionRelative,
    ...props
}) => (
        <Container {...props} align={isRightButton ? 'flex-end' : 'center'} alignSelf={align} width={width} top={top} position={positionRelative}>
            <TextContainer>
                <ButtonText
                    size={small ? 12 : 16}
                    count={count}
                    color={isLoading ? '#ccc' : color}>
                    {children}
                </ButtonText>
                {count ? <Tag><TagText>{count}</TagText></Tag> : <></>}
            </TextContainer>
        </Container>
    );

export default Button;
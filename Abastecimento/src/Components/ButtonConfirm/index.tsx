import React from 'react';
import {
    Container,
    TextContainer,
    ButtonText,
    Tag,
    TagText
} from './styles';

interface ButtonConfirmProps  {
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
    onPress?: () => void;
}

const ButtonConfirm: React.FC<ButtonConfirmProps> = ({
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
    onPress,
    ...props
}) => (
        <Container {...props}
            onPress={onPress}
            align={isRightButton ? 'flex-end' : 'center'}
            alignSelf={align}
            width={width}
            top={top}
            position={positionRelative}>
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

export default ButtonConfirm;
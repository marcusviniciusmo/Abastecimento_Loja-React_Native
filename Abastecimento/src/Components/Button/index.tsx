import React from 'react';
import {
    Container,
    TextContainer,
    ButtonText,
    Tag,
    TagText
} from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
    children: string;
    small?: boolean;
    color?: boolean;
    isLoading?: boolean;
    count?: boolean;
    isRightButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    small,
    isLoading,
    color,
    count,
    isRightButton,
    ...props
}) => (
    <Container {...props} align={isRightButton ? 'flex-end' : 'center'}>
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
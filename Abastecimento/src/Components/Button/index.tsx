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
    isLoading?: boolean;
    count?: boolean;
    isRightButton?: boolean;
    buttonConfirm?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    small,
    isLoading,
    color,
    count,
    isRightButton,
    buttonConfirm,
    ...props
}) => (
        <Container {...props} align={isRightButton ? 'flex-end' : 'center'} buttonConfirm={buttonConfirm}>
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
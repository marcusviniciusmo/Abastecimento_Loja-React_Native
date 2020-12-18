import React from 'react';
import { Container, IconStyled, TextInput, IconButton } from './styles';
import { TextInputProps, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface buttonProperties extends TouchableOpacityProps {
    icon: string;
};

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
    size?: number;
    height?: number;
    bordered?: boolean;
    buttonProperties?: buttonProperties;
};

const Input: React.FC<InputProps> = ({
    icon,
    bordered,
    size,
    height,
    buttonProperties,
    ...props
}) => (
        <Container bordered={bordered} height={height}>
            <IconStyled name={icon} size={size ? size : 20} color={'#666360'} />
            <TextInput placeholderTextColor='#888' {...props} />
            {
                buttonProperties && (
                    <IconButton {...buttonProperties}>
                        <Icon name={buttonProperties.icon} size={25} color={'#666360'} />
                    </IconButton>
                )}
        </Container>
    );

export default Input;
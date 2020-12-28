import React from 'react';
import { Container, IconStyled, IconStyledRight, TextInput, IconButton } from './styles';
import { TextInputProps, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { sizeDefaultInput, heightDefaultInput } from '../../Utils';

interface buttonProperties extends TouchableOpacityProps {
    icon: string;
};

interface InputProps extends TextInputProps {
    name: string;
    icon: string;
    iconRight?: string;
    size?: number;
    height?: number;
    bordered?: boolean;
    buttonProperties?: buttonProperties;
};

const Input: React.FC<InputProps> = ({
    icon,
    iconRight,
    bordered,
    size,
    height,
    buttonProperties,
    ...props
}) => (
        <Container bordered={bordered} height={height ? height : heightDefaultInput}>
            <IconStyled name={icon} size={size ? size : sizeDefaultInput} color={'#666360'} />
            <TextInput placeholderTextColor='#888' {...props} />
            {
                iconRight &&
                <IconStyledRight name={iconRight} size={size ? size : sizeDefaultInput} color={'#666360'}/>
            }
            {
                buttonProperties && (
                    <IconButton {...buttonProperties}>
                        <Icon name={buttonProperties.icon} size={25} color={'#666360'} />
                    </IconButton>
                )}
        </Container>
    );

export default Input;
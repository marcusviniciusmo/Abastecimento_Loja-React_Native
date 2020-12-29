import React from 'react';
import { Container, TextWarning } from './styles';
import { Switch } from 'react-native-gesture-handler';

interface WarnSwitchProps {
    textWarning: string;
    getValueSwitch: () => boolean;
    changeValueSwitch: () => void;
}

const WarningSwitch: React.FC<WarnSwitchProps> = ({
    textWarning,
    getValueSwitch,
    changeValueSwitch
}) => {
    const switchOn = getValueSwitch();

    const onToggleSwitch = () => changeValueSwitch();

    return (
        <Container>
            <Switch value={switchOn} onValueChange={onToggleSwitch} thumbColor={ switchOn ? '#0054A6' : '#ccc'} />
            <TextWarning on={switchOn}>{textWarning}</TextWarning>
        </Container>
    )
};

export default WarningSwitch;
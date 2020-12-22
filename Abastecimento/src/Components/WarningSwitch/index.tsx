import React, { useState } from 'react';
import { Container, TextWarning } from './styles';
import { Switch } from 'react-native-gesture-handler';

interface WarnSwitchProps {
    textOff: string;
    textOn: string;
}

const WarningSwitch: React.FC<WarnSwitchProps> = ({
    textOff,
    textOn
}) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <Container>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} thumbColor={ isSwitchOn ? '#0054A6' : '#ccc'} />
            <TextWarning on={isSwitchOn}>{isSwitchOn ? textOn : textOff}</TextWarning>
        </Container>
    )
};

export default WarningSwitch;
import React, { useState } from 'react';
import { Container, TextWarn } from './styles';
import { Switch } from 'react-native-gesture-handler';

interface WarnSwitchProps {
    text: string;
}

const WarnSwitch: React.FC<WarnSwitchProps> = ({
    text
}) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <Container>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} thumbColor='#0054A6' />
            <TextWarn>{text}</TextWarn>
        </Container>
    )
};

export default WarnSwitch;
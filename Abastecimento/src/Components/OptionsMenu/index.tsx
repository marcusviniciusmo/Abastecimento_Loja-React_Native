import React, { useState } from 'react';
import { Container, ViewOptions, TextOptions, OptionsStyled, ButtonExpand } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import SubOptionsMenu from '../SuOptionsMenu';
import { SubOptionsMenuProps } from '../../pmenos-utils/types';

interface OptionsMenuProps {
    navigation?: any;
    text: string;
    icon?: string;
    showButton?: boolean;
    isFavorito?: boolean;
    options?: Array<SubOptionsMenuProps>;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({
    navigation,
    icon,
    text,
    showButton,
    isFavorito,
    options
}) => {
    const [expandir, setExpandir] = useState(false);

    return (
        <Container>
            <ViewOptions isFavorito={isFavorito}>
                <OptionsStyled>
                    {
                        icon &&
                        <Icon name={icon} size={25} color={'#fff'} />
                    }
                    <TextOptions isFavorito={isFavorito}>{text}</TextOptions>
                    {
                        showButton && (
                            <ButtonExpand onPress={() => {
                                setExpandir(!expandir)
                            }}>
                                <Icon name={expandir ? 'chevron-up' : 'chevron-down'} size={25} color={'#fff'} />
                            </ButtonExpand>
                        )
                    }
                </OptionsStyled>
            </ViewOptions>
            {
                expandir &&
                <SubOptionsMenu
                    options={options}
                    navigation={navigation}
                />
            }
        </Container>
    )
};

export default OptionsMenu;
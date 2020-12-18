import React from 'react';
import { Container, TextOptionsSubMenu, View } from './styles';

interface OptionsProps {
    idOptions: number;
    descricaoOptions: string;
}

interface SubOptionsMenuProps {
    options?: Array<OptionsProps>;
}

const SubOptionsMenu: React.FC<SubOptionsMenuProps> = ({
    options
}) => {
    return (
        <View>
            {
                options.map((o) => {
                    return (
                        <Container key={o.idOptions} id={o.idOptions} options={options}>
                            <TextOptionsSubMenu>
                                {o.descricaoOptions}
                            </TextOptionsSubMenu>
                        </Container>
                    )
                })
            }
        </View>
    )
}

export default SubOptionsMenu;
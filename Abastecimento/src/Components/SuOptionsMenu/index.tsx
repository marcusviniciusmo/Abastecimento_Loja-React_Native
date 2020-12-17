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
                    console.log('options.length')
                    console.log(options.length)
                    console.log('o.idOptions')
                    console.log(o.idOptions)
                    return (
                        <Container key={o.idOptions}>
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
import React from 'react';
import { Container, TextOptionsSubMenu, View } from './styles';

interface OptionsProps {
    idOptions: number;
    descricaoOptions: string;
    categoriaMenu: string;
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
                            <TextOptionsSubMenu options={options} id={o.idOptions} categoria={o.categoriaMenu}>
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
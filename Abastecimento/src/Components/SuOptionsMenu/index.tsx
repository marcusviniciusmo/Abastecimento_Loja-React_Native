import React from 'react';
import { Container, TextOptionsSubMenu } from './styles';
import { SubOptionsMenuProps } from '../../pmenos-utils/types';
import { View } from 'react-native';

interface MenuSubOptionsProps {
    navigation?: any;
    options?: Array<SubOptionsMenuProps>;
};

const SubOptionsMenu: React.FC<MenuSubOptionsProps> = ({
    navigation,
    options
}) => {

    const acessarOpcaoMenu = ((opcao: string ) => {
        if (opcao !== '') {
            navigation.navigate(opcao);
        };
    });

    return (
        <View>
            {
                options.map((o) => {
                    return (
                        <Container key={o.idOptions} id={o.idOptions} options={options} onPress={() => acessarOpcaoMenu(o.route)}>
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
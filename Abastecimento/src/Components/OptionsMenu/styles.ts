import { Icon } from 'react-native-vector-icons/Icon';
import styled from 'styled-components/native';

interface FavoritosProps {
    favoritos: boolean;
};

export const Container = styled.View.attrs((favoritos: FavoritosProps) => {})`
    background-color: ${({ favoritos }: any ) => favoritos ? '#fff' : '#0054A6'} ;
    border: ${({ favoritos }: any ) => favoritos ? '1px solid #0054A6' : 'none'} ;
    height: 50px;
    width: 85%;
    border-radius: 8px;
    align-self: center;
    margin: 3px 0;
`;

interface optionsShowProps {
    show: boolean;
}

export const OptionsStyled = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin : auto 12px;
    align-items: center;
`;

export const TextOptions = styled.Text.attrs((favoritos: FavoritosProps) => {})`
    color: ${({ favoritos }: any ) => favoritos ? '#0054A6' : '#fff'};
    text-align: center;
    font-size: 14px;
    flex: 1;
`;
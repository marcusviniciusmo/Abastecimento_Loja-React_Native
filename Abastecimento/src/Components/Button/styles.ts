import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const borderRadius = '10px';

export const Container = styled(RectButton).attrs((alignSelf: string, width: string, top: string, position: boolean) => {})`
    width: ${({ width }: any ) => width ? width : '90'}%;
    align-self: ${({ alignSelf }: any ) => alignSelf ? 'auto' : 'center'};
    position: ${({ position }: any) => position ? 'relative' : 'absolute'};
    height: 60px;
    background-color: #00469B;
    border-radius: ${borderRadius};
    justify-content: center;
    align-items: ${({ align }: any) => align || 'center'};
    top: ${({ top }: any) => top ? top : '88'}%;
`;

export const TextContainer = styled.View`
    position: relative;
`;

interface ButtonTextProps {
    color: string;
    size: any;
    count: any;
};

export const ButtonText = styled.Text.attrs((props: ButtonTextProps) => { })`
    color: ${({ color }: any) => color || '#fff'};
    font-size: ${({ size }: any) => size || 16}px;
    margin-right: ${({ count }: any) =>
        count > 10 ? '40' : !count ? '0' : '30'}px;
`;

export const Tag = styled.View`
    background-color: #E60002;
    padding: 2px 5px;
    border-radius: ${borderRadius};
    margin: 0px 3px;
    position: absolute;
    right: 5px;
    top: -4px;
`;

export const TagText = styled.Text`
    color: #fff;
`;
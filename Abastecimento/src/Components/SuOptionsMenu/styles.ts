import styled from 'styled-components/native';

export const View = styled.View`
`;

export const Container = styled.View.attrs((id: number, options: any) => {
})`
    width: 80%;
    align-self: center;
    height: 35px;
    border: 1px solid #0054A6;
    border-radius: ${({ id, options }: any) => id === options.length ? '5' : 0}px;
`;

export const TextOptionsSubMenu = styled.Text`
    color: #0054A6;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`;
import styled from 'styled-components/native';

export const Container = styled.View.attrs((top: string, inputAlign: boolean) => {
    top
    inputAlign
})`
    background-color: #75808B;
    position: absolute;
    width:${({ inputAlign }: any) => inputAlign ? '85' : '90'}%;
    height: 60px;
    top: ${({ top }: any) => top ? top : '88'}%;
    border-radius: 8px;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContainerTip = styled.View.attrs((length: number) => {
    length
})`
    width: ${({ length } : any ) => length >= 50 ? '73' : '80'}%;
    align-self: center;
`;

export const TipText = styled.Text`
    color: #fff;
    text-align: center;
`;